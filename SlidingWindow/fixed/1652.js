var decrypt = function (code, k) {
  let ans = new Array(code.length).fill(0);

  if (k === 0) return ans;
  for (let index = 0; index < code.length; index++) {
    let sum = 0;
    for (let j = 1; j <= Math.abs(k); j++) {
      // normal forwad
      if (k > 0) sum += code[(index + j) % code.length];
      //   circul back
      else sum += code[(index - j + code.length) % code.length];
    }
    ans[index] = sum;
  }
  return ans;
};
let code = [5, 7, 1, 4],
  k = 3;
console.log(decrypt(code, k));
