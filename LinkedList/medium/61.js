var rotateRight = function (head, k) {
  // two pointer -> curr , prev
  // loop -> till last
  // inside a another loop till - k
  //     curr.next -> prev
  //   return head or curr
  if (!head || !head.next || k === 0) {
    return head;
  }

  let curr = head,
    prev = head,
    len = 1;
  while (curr.next !== null) {
    len++;
    curr = curr.next;
  }

  k = k % len;

  if (k === 0) return head;

  let steps = len - k - 1;

  let tail = head;
  curr.next = head;
  while (steps > 0) {
    tail = tail.next;
    steps--;
  }
  let currHead = tail.next;
  tail.next = null;
  return currHead;
};
let head = [1, 2, 3, 4, 5],
  k = 2;
console.log(rotateRight(head, k));
