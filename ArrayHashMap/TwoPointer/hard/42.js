const trappingWater = (heights) => {

    const n = heights.length;
    //getting left prefixSum array 
    let leftSum = Array(n).fill(0);
    leftSum[0] = heights[0]
    for(let i = 1 ; i < heights.length ; i++){
        leftSum[i] = Math.max(leftSum[i-1],heights[i]);
    }

    //getting right prefixSum array
    let rightSum = Array(n).fill(0);
    rightSum[heights.length-1] = heights[heights.length-1];
    for(let r = heights.length - 2 ; r >= 0 ; r --){
        rightSum[r] = Math.max(rightSum[r+1] , heights[r]);
    }

    //calculate water 
    let water = 0 ;
    for(let i = 0 ; i < heights.length ; i++){
        water += Math.min(leftSum[i] , rightSum[i]) - heights[i];
    }

    return water;
}

console.log(trappingWater([0,1,0,2,1,0,1,3,2,1,2,1]))