var searchInsert = function(nums, target) {
    
    if(nums.length === 0) return 0;

    let low = 0; 
    let high = nums.length -1 ;
    while (low <= high){
        let mid = Math.floor ((low + high)/2); 

        if(nums[mid] >= target){
            high = mid - 1;
        }else {
            low = mid + 1;
        }
    }
    return low; 
};