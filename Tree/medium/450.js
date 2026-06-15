var deleteNode = function(root, key) {
    if (root === null) return null;

    if (root.val > key) {
        root.left = deleteNode(root.left, key);
    }
    else if (root.val < key) {
        root.right = deleteNode(root.right, key);
    }
    else {
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        let minNode = root.right;
        while (minNode.left) minNode = minNode.left;

        root.val = minNode.val;
        root.right = deleteNode(root.right, minNode.val);
    }
    return root;
};
let root = [5,3,6,2,4,null,7], key = 3;
console.log(deleteNode(root,key))