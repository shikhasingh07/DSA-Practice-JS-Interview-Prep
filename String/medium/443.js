var compress = function (chars) {
  let i = 0,
    w = 0;

  while (i < chars.length) {
    let char = chars[i];
    let count = 0;
    let j = i;
    while (j < chars.length && chars[j] === char) {
      count++;
      j++;
    }
    chars[w] = char;
    w++;

    if (count > 1) {
      for (let d of String(count)) {
        chars[w] = d;
        w++;
      }
    }

    i = j;
  }

  return w;
};
let chars = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(chars));
