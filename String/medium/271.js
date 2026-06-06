function encode(strs) {
  let result = "";
  for (let i of strs) {
    result += i.length + "#" + i;
  }

  return result;
}

function decode(strs) {
  let result = [];
  let i = 0;
  while (i < strs.length) {
    let j = i;
    while (strs[j] !== "#") {
      j++;
    }

    let len = Number(strs.slice(i, j));
    result.push(strs.slice(j + 1, j + 1 + len));
    console.log(len);
    i = j + 1 + len;
  }
  return result;
}

let arr = ["eat", "tea"];
console.log(encode(arr));
console.log(decode(encode(arr)));
