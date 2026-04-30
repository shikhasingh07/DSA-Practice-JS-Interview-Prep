var getAverages = function (nums, k) {
  // let sum , itemsCount , left , result
  // for(right -> nums )
  // sum += nums[right]
  //  itemsCount += 1;
  // while (itemsCount > k)
  // left ++ , delet from array , moving forward
  //   in result somehow i neeed to add avg if exist otherwise -1

  let sum = 0,
    itemsCount = 0,
    left = 0,
    result = new Array(nums.length).fill(-1);

  for (let i = 0; i <= 2 * k; i++) {
    sum += nums[i];
  }

  for (let i = k; i < nums.length - k; i++) {
    result[i] = Math.floor(sum / (2 * k + 1));
    sum += nums[i + k + 1]; 
    sum -= nums[i - k];
  }

  return result;
};
let nums = [7, 4, 3, 9, 1, 8, 5, 2, 6],
  k = 3;
console.log(getAverages(nums, k));
