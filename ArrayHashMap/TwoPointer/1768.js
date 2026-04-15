var mergeAlternately = function(word1, word2) {
    
    let i = 0 ; 
    let j = 0 ; 
    
    let ans = ''; 
    
    while ( i < word1.length ||  j < word2.length){
      if(i < word1.length){
        ans += word1[i]; 
        i++; 
      }
      if(j < word2.length){
        ans += word2[j]; 
        j++; 
      }
    }
    return ans; 
};

console.log(mergeAlternately("abc","pqr"))