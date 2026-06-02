function canDo (time , mid , tt){
   let result = 0; 
   for(const t of time){
      result  += Math.floor(mid / t); 
   }

   return result >= tt;
}
var minimumTime = function (time, totalTrips) {
  let lo = 1,
    hi = Math.min(...time) * totalTrips;
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (canDo(time, mid, totalTrips)) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
};
let time = [1, 2, 3],
  totalTrips = 5;
console.log(minimumTime(time, totalTrips));
