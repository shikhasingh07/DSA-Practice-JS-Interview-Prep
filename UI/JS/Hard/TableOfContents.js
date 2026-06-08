function tableOfContents(doc) {
    const headings = [...doc.querySelectorAll('h1,h2,h3,h4,h5,h6')];
    let result = '';
    let currentLevel = 0;
    let openUls = 0;

    for (const heading of headings) {
        const level = parseInt(heading.tagName[1]);

        if (level > currentLevel) {
            result += '<ul>';
            openUls++;
        } else if (level < currentLevel) {
            while (currentLevel > level) {
                result += '</li></ul>';
                openUls--;
                currentLevel--;
            }
            result += '</li>';
        } else {
            result += '</li>';
        }

        result += `<li>${heading.textContent}`;
        currentLevel = level;
    }

    while (openUls > 0) {
        result += '</li></ul>';
        openUls--;
    }
    return result;
}

const doc = new DOMParser().parseFromString(
  `<!DOCTYPE html>
  <body>
    <h1>Heading1</h1>
    <h2>Heading2a</h2>
    <h2>Heading2b</h2>
    <h3>Heading3a</h3>
    <h3>Heading3b</h3>
    <h4>Heading4</h4>
    <h2>Heading2c</h2>
  </body>`,
  "text/html",
);

const htmlString = tableOfContents(doc);
console.log(htmlString);
