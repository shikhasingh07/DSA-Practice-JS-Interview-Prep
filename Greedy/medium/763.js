var partitionLabels = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = i;
  }

  // loop again
  // find max till i get element first again
  // if i got that element also i need to find max of subele as well
  // push that into array
  // return that array

  let result = [],
    start = 0,
    end = 0;

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, map[s[i]]);

    if (i === end) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }

  return result;
};
let s = "ababcbacadefegdehijhklij";
console.log(partitionLabels(s));
