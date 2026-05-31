function canDo(piles, k, h) {
    let hours = 0;
    for (let pile of piles) {
        hours += Math.ceil(pile/k);
    }
    return hours <= h;
}

var minEatingSpeed = function(piles, h) {
    
    let lo = 1 , hi = Math.max(...piles); 
    while(lo < hi){
        let mid = Math.floor((lo + hi) / 2); 

        if(canDo(piles,mid,h)){
            hi = mid; 
        }else {
            lo = mid + 1; 
        }
    }
    return lo;
};
let piles = [3,6,7,11], h = 8;
console.log(minEatingSpeed(piles,h))