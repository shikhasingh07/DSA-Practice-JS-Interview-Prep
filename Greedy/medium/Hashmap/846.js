var isNStraightHand = function (hand, groupSize) {
  // sort
  // sort pushed in map
  // loop
  // while till grounp Size
  // getting and checked in map -> exist puhsed in ans
  // true
  // outer loop false

  hand.sort((a, b) => a - b);
  let map = {};
  for (let item in hand) {
    map[hand[item]] = (map[hand[item]] || 0) + 1;
  }
  
  for(let i = 0 ; i < hand.length ; i++){
    if(map[hand[i]] === 0) continue;
    
    for(let j = 0 ; j <groupSize ; j++){
        if(!map[hand[i] + j])return false;
        map[hand[i] + j]--;
    }
  }
  return true;
};

let hand = [1,2,3,4,5],
  groupSize = 4;
console.log(isNStraightHand(hand, groupSize));
