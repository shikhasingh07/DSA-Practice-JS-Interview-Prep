var NumArray = function(nums) {
    this.prefix = [0];
    for(let i = 0 ; i < nums.length ;i++){
        this.prefix[i+1] = this.prefix[i] + nums[i];
    }
};


NumArray.prototype.sumRange = function(left, right) {
    return this.prefix[right + 1] - this.prefix[left];
};

let arr = ["NumArray", "sumRange", "sumRange", "sumRange"] , 
sumrange = [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]];

NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
