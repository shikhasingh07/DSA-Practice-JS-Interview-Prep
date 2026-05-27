var search = function(nums, target) {
    let lo = 0 , hi = nums.length - 1; 

    while( lo <= hi){

        let mid = Math.floor((lo + hi) / 2); 

        if(nums[mid] === target){
            return mid; 
        }else if (nums[mid]  > target){
            hi = mid - 1;
        }else {
            lo = mid + 1; 
        }
        
    }
    return -1;
};
let nums = [-1,0,3,5,9,12], target = 2;
console.log(search(nums , target));