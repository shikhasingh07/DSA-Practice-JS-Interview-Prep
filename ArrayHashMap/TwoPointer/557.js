function reverse(words){
   let i = 0 ; 
   let j = words.length - 1;

   while (i < j){
    let itr = words[i] ; 
    words[i] = words[j] ; 
    words[j] = itr; 
     i++; 
     j--; 
   }
}

var reverseWords = function(s) {
    let response = s.split(" "); 
    for(let i = 0 ; i < response.length ; i++){
      let ans = response[i].split(''); 
      reverse(ans);
      response[i] = ans.join("")
    }
    return response.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"))