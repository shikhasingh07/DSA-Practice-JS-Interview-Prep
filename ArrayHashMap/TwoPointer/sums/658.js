var findClosestElements = function (arr, k, x) {
  let left = 0,
    right = arr.length - 1;
  while (right - left + 1 > k) {
    console.log(Math.abs(arr[left] - x) , Math.abs(arr[right] - x))
    if (Math.abs(arr[left] - x) > Math.abs(arr[right] - x)) {
      left++;
    } else {
      right--;
    }
  }
  return arr.slice(left, left + k);
};
let arr = [1,1,2,3,4,5],
  k = 4,
  x = -1;
console.log(findClosestElements(arr, k, x));
