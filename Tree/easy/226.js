var invertTree = function(root) {
    if(root === null) return 

    [root.left , root.right] = [root.right , root.left];
    invertTree(root.left); 
    invertTree(root.right); 

    return root;
};
let root = [4,2,7,1,3,6,9];
console.log(invertTree(root))