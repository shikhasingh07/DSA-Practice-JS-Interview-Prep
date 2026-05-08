function getElementsByClassName(element, classNames) {
    const classes = classNames.trim().split(/\s+/);
    const result = [];
    
    function dfs(el) {
        for (const child of el.children) {
           if (classes.every(c => child.classList.contains(c))) {
            result.push(child);
           }
           dfs(child);
        }
    }
    
    dfs(element);
    return result;
}
const doc = new DOMParser().parseFromString(
  `<div class="foo bar baz">
    <span class="bar baz">Span</span>
    <p class="foo baz">Paragraph</p>
    <div class="foo bar"></div>
  </div>`,
  'text/html',
);

console.log(getElementsByClassName(doc.body, 'foo bar'));

