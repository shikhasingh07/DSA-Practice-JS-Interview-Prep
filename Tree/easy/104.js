var maxDepth = function(root) {
    
    if(root === null){
        return 0; 
    }

    let depthLeft = maxDepth(root.left); 
    let depthRight = maxDepth(root.right); 

    return 1 + Math.max(depthLeft , depthRight);
};
let root = [3,9,20,null,null,15,7];
console.log(maxDepth(root))