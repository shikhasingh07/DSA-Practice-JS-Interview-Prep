var reverseBetween = function (head, left, right) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  // Step 1: left se pehle pahuncho
  for (let i = 0; i < left - 1; i++) {
    prev = prev.next;
  }

  // Step 2: reverse karo
  let curr = prev.next;
  for (let i = 0; i < right - left; i++) {
    let next = curr.next;
    curr.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }

  return dummy.next;
};
let head = [1, 2, 3, 4, 5],
  left = 2,
  right = 4;
console.log(reverseBetween(head, left, right));
