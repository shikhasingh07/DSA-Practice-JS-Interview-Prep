var isSameTree = function (p, q) {
 if (p === null || q === null) return p === q;

  if(p.val !== q.val ) return false;
  return isSameTree(p.left , q.left) && isSameTree(p.right , q.right)
};

let p = [1, 2],
  q = [1, null, 2];
console.log(isSameTree(p, q));
