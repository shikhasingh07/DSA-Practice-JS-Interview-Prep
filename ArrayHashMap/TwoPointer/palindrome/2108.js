function check(str){
    let i = 0 ; 
    let j = str.length-1; 

    while ( i  < j ){
        if(str[i] !== str[j]){
            return false; 
        }
        i++;
        j--; 
    }
    return true; 
}

var firstPalindrome = function(words) {
    for (let i = 0 ; i < words.length ; i++){
       if(check(words[i])){
         return words[i]; 
       }
    }
    return ""; 
};

console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))