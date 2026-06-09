var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let total = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    let car = Math.floor(total / 10);
    carry = car;
    curr.next = new ListNode(total % 10);
    curr = curr.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    // new node banao
    // carry update karo
  }

  return dummy.next;
};
let l1 = [2, 4, 3],
  l2 = [5, 6, 4];
console.log(addTwoNumbers(l1, l2));
