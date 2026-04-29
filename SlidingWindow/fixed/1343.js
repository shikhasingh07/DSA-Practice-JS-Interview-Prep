var numOfSubarrays = function (arr, k, threshold) {
  let sum = 0;
  let count = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
    if (index >= k - 1) {
      if (index >= k) {
        sum -= arr[index - k];
      }
      if (sum >= k * threshold) count++;
    }
  }
  return count;
};

let arr = [2, 2, 2, 2, 5, 5, 5, 8],
  k = 3,
  threshold = 4;
console.log(numOfSubarrays(arr, k, threshold));
