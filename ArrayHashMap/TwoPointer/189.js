var rotate = function(nums, k) {
    k = k % nums.length; 

    reverse(nums , 0 , nums.length-1);
    // [7,6,5,4,3,2,1]
    reverse(nums, 0 , k - 1);
    reverse(nums, k, nums.length - 1);
};

function reverse (nums , st , last){
    while (st < last){
        [nums[st],nums[last]] = [nums[last],nums[st]]; 
        last --; 
        st ++; 
    }
}

let nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums); // Output: [5, 6, 7, 1, 2, 3, 4]