var pivotArray = function (nums, pivot) {
    let ans = new Array(nums.length);
    let less = 0;
    let more = nums.length - 1;
    for (let i = 0 , j = nums.length - 1; i < nums.length; i++ , j--) {
        if (nums[i] < pivot) {
            ans[less] = nums[i];
            less++;
        }
        if (nums[j] > pivot) {
            ans[more] = nums[j];
            more--;
        }
    }

    while (less <= more) {
        ans[less] = pivot;
        less++;
    }
    return ans;
};
 