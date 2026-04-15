var numSubseq = function (nums, target) {

    nums.sort((a, b) => a - b)
    let mod = 1000000007;
    let pow = Array(nums.length).fill(0);

    //i created for power map {0 : 1 , 1 : 2 , 2 : 4}
    pow[0] = 1
    for (let i = 1; i < nums.length; i++) {
        pow[i] = (pow[i - 1] * 2) % mod;
    }

    let i = 0;
    let j = nums.length - 1;
    let res = 0;
    // checking for subsquesce 
    while (i <= j) {
        if (nums[i] + nums[j] <= target) {
            res = (res + pow[j - i]) % mod;
            i++;
        } else {
            j--;
        }
    }
    return res;
};