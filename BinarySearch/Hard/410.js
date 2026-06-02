function canDo(nums,cap , k){
    let parts = 1 , current = 0; 
    for(let sum of nums){
        if((current + sum) > cap){
            parts ++; 
            current = 0; 
        }
        current += sum; 
    }

    return parts <= k;
}
var splitArray = function(nums, k) {
    
    let lo = Math.max(...nums) , hi = nums.reduce((a, b) => a + b, 0);

    while (lo < hi){
        let mid = Math.floor((lo + hi)/ 2); 
      
        if(canDo(nums,mid , k)){
            hi = mid;
        }else {
            lo = mid + 1; 
        }
    }
    return lo; 
};
let nums = [7,2,5,10,8], k = 2;
console.log(splitArray(nums,k));