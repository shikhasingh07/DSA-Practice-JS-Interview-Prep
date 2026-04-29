function containsNearbyDuplicate = (nums, k) => {
        
      let window = new Set(); 

      for(let i = 0; i < nums.length ; i++){

        if(window.has(nums[i])){
          return true;
        }

        window.add(nums[i]);

        if(window.size > k){
          window.delete(nums[i-k]);
        }
      }
      return false;
}
let nums = [2,1,2], k = 1;
console.log(containsNearbyDuplicate(nums,k));