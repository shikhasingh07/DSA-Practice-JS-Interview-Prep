var findMin = function(nums) {
    
    let lo = 0 , hi = nums.length - 1;

    while(lo < hi){
        let mid = Math.floor((lo + hi) / 2);

        if(nums[mid] > nums[hi]){
            lo = mid + 1;
        }else {
            hi = mid;
        }
    }

    return nums[lo];
};

let nums = [3,4,5,1,2];
console.log(findMin(nums));