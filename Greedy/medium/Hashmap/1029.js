var twoCitySchedCost = function(costs) {
    
    let total = costs.reduce((p,c) => p + c[0],0);

    let diff = [];
    for(let i = 0 ; i < costs.length ; i++){
        diff[i] = costs[i][1] - costs[i][0];
    }

    console.log(diff)
    diff.sort((a,b) => a-b);
    console.log(diff)
    for(let i = 0 ; i < costs.length / 2 ; i++){
        total += diff[i];
        console.log(total)
    }

    return total
    console.log(total)
};
let costs = [[10,20],[30,200],[400,50],[30,20]];
console.log(twoCitySchedCost(costs))