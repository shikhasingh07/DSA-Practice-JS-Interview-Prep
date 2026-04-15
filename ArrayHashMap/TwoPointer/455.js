var findContentChildren = function(g, s) {
    let i = 0 ; 
    let j = 0; 

    g.sort((a,b) => a-b); 
    s.sort((a,b) => a-b)
    

    while (i < g.length && j < s.length){
        if(g[i] <= s[j]){
            i++; 
        }
        j++;  
    }

    return i; 
};

console.log(findContentChildren([1,2,3],[1,1]))