var findMedianSortedArrays = function (nums1, nums2) {
    let lo = 0,
    hi = nums1.length;
  let m = nums1.length,
    n = nums2.length;
  
  if (m > n) return findMedianSortedArrays(nums2, nums1);
    
  while (lo <= hi) {
    let mid1 = Math.floor((lo + hi) / 2);
    let mid2 = Math.floor((m + n + 1) / 2) - mid1;

    let maxLeft1 = mid1 === 0 ? -Infinity : nums1[mid1 - 1];
    let minRight1 = mid1 === m ? Infinity : nums1[mid1];
    let maxLeft2 = mid2 === 0 ? -Infinity : nums2[mid2 - 1];
    let minRight2 = mid2 === n ? Infinity : nums2[mid2];

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((m + n) % 2 !== 0) {
        return Math.max(maxLeft1, maxLeft2);
      } else {
        return (
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        );
      }
    } else if (maxLeft1 > minRight2) {
      hi = mid1 - 1;
    } else {
      lo = mid1 + 1;
    }
  }
  return -1;
};
let nums1 = [4,5,6,8,9],
  nums2 = [];
console.log(findMedianSortedArrays(nums1, nums2));
