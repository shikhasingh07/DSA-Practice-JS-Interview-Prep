var rearrangeArray = function(nums) {
    nums.sort((a,b) => a - b);
    let i = 0; 
    let j = nums.length - 1; 
    
    let res = [];
    while(res.length !== nums.length){ 
          
        res.push(nums[i]); 
        i++; 

        if( i <= j){
            res.push(nums[j]); 
            j--;
        }
    }

    return res;
};

console.log(rearrangeArray([1,2,3,4,5]))