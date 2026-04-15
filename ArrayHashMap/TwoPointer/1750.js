var minimumLength = function(s) {
    let i = 0 ;
    let j = s.length - 1 ; 

    while (i < j && s[i] === s[j]) { 
        let c = s[i]; 
        while( i <= j && s[i] === c){
            i++; 
        }

        while(i < j && s[j] === c){
            j--; 
        }
    }

    return j - i + 1; 
};

console.log(minimumLength("aabccabba"))