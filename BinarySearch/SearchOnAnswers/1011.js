const canDo = (weights, cap, days) => {
  let max = 1,
    load = 0;
  for (const weight of weights) {
    if (load + weight > cap) {
      max++;
      load = 0;
    }
    load += weight;
  }
  return max <= days;
};
var shipWithinDays = function (weights, days) {

    let lo = Math.max(...weights) , hi = weights.reduce((a,b) => a+b, 0);
    
    while(lo < hi){
        let mid = Math.floor((lo + hi) / 2);

        if(canDo(weights , mid , days)){
            hi = mid;
        }else { 
            lo =  mid +1;
        }
    }
    return hi; 
};

let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  days = 5;
console.log(shipWithinDays(weights, days));
