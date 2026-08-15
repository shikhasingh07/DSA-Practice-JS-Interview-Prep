function dfs(node, isConnected, visit) {

    visit.add(node);
    
    for(let j = 0 ; j < isConnected[node].length ; j++){
        if(isConnected[node][j] && !visit.has(j)){
            dfs(j , isConnected , visit);
        }
    }
}
var findCircleNum = function (isConnected) {
    let n = isConnected.length;
    let visit = new Set();
    let provinces = 0;



    for (let i = 0; i < isConnected.length; i++) {

        if (!visit.has(i)) {
            dfs(i, isConnected, visit);
            provinces++;
        }

    }

    return provinces;
}
let isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];
console.log(findCircleNum(isConnected))