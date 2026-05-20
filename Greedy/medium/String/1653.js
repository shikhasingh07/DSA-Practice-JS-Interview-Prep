var minimumDeletions = function(s) {
    
    let deletionCount = 0 , bCount = 0 ;
    for(let item of s){

        if(item === "b"){
            bCount++;
        }

        if(item === "a" && bCount > 0){
            deletionCount++; 
            bCount--;
        }
    }

   return deletionCount;
};

let s = "aababbab";
console.log(minimumDeletions(s));