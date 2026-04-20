var mergeAlternately = function (word1, word2) {
  //     let i = 0 ;
  //     let j = 0 ;

  //     let ans = '';

  //     while ( i < word1.length ||  j < word2.length){
  //       if(i < word1.length){
  //         ans += word1[i];
  //         i++;
  //       }
  //       if(j < word2.length){
  //         ans += word2[j];
  //         j++;
  //       }
  //     }
  //     return ans;
  let len = Math.min(word1.length, word2.length);
  let str = 0;
  let ans = "";
  while (str < len) {
    ans += word1[str];
    ans += word2[str];
    str++;
  }

  ans += word1.slice(len);
  ans += word2.slice(len);

  return ans;
};

console.log(mergeAlternately("abc", "pqr"));
