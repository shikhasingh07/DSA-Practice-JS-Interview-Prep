function swap( i , j , nums){
    let itr = nums[i] ; 
    nums[i] = nums[j] ;
    nums[j] = itr; 
}

var sortArrayByParity = function(nums) {
    
    let i = 0 ; 
    let j = 0 ; 

    while (j < nums.length){
        if(nums[j] % 2 === 0){
            swap(i , j , nums)
            i++;
        }
        j++;
    }

    return nums; 
}; 

console.log(sortArrayByParity([3,1,2,4]))