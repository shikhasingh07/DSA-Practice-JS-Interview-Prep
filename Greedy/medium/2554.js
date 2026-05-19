var maxCount = function(banned, n, maxSum) {
    
    // map 
    let map = new Set(banned);

    // loop 
    let sum = 0 , count = 0;
    for(let i = 1 ; i <= n; i++){
        if(!map.has(i)){
            sum += i; 
            if(sum > maxSum){
               break;
            }
            count++;
        }
    }

    return count;
    console.log(count);
};

let banned = [1,6,5], n = 5, maxSum = 6;
console.log(maxCount(banned,n,maxSum));