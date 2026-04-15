var wiggleSort = function (nums) {

    nums.sort((a, b) => a - b);

    let i = 1, n = nums.length;
    let j = n - 1;
    let res = [];
    while (i < n) {
        res[i] = nums[j];
        i += 2;
        j--;
    }
    i = 0;
    while (i < n) {
        res[i] = nums[j];
        i += 2;
        j--;
    }

    for (i = 0; i < n ; i++) {
        nums[i] = res[i];
    }

    return nums;
};
