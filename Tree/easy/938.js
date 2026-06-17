
var rangeSumBST = function (root, low, high) {
    let total = 0;
function isVaild(root, low, high) {
    if (root === null) {
        return;
    }

    if (root.val < low) {
        isVaild(root.right, low, high);

    }
    else if (root.val > high) {
        isVaild(root.left, low, high);
    } else {
        total += root.val;
        isVaild(root.left, low, high);
        isVaild(root.right, low, high);
    }

}
    isVaild(root, low, high);
    return total;
};