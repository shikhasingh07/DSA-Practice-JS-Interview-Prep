function IsBsT(root, min, max) {
    if(!root) return true

    if (min !== null && root.val <= min) return false;
    if (max !== null && root.val >= max) return false;

    return IsBsT(root.left, min, root.val) && IsBsT(root.right, root.val, max);
}
var isValidBST = function (root) {
    if (root === null) return true;
    return IsBsT(root, null, null);
};
let root = [2, 1, 3];
console.log(isValidBST(root))