var getIntersectionNode = function (headA, headB) {
 
    let a = headA , b = headB; 
    while ( a !== b){
        a = a === null ? headB : a.next; 
        b = b === null ? headA : b.next;
    }
    return a;
};
let intersectVal = 8,
  listA = [4, 1, 8, 4, 5],
  listB = [5, 6, 1, 8, 4, 5],
  skipA = 2,
  skipB = 3;
console.log(getIntersectionNode(listA, listB));
