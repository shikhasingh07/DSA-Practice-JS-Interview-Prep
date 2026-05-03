var numberOfSubstrings = function (s) {
  let left = 0,
    map = { a: 0, b: 0, c: 0 },
    result = 0;

  for (let right = 0; right < s.length; right++) {
    map[s[right]]++;

    while (map["a"] > 0 && map["b"] > 0 && map["c"] > 0) {
        map[s[left]]--;
        left++;
    }
    result += left; 
  }
  return result;
};
let s = "abcabc";
console.log(numberOfSubstrings(s));
