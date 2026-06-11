function reverse(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

var reorderList = function (head) {
  let slow = head;
  let fast = head;

  // finding middle
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = slow.next;
  slow.next = null; // ← cut karo
  let reversed = reverse(second);

  let l1 = head;
  let l2 = reversed;
  while (l2 !== null) {
    let next1 = l1.next;
    let next2 = l2.next;
    l1.next = l2;
    l2.next = next1;
    l1 = next1;
    l2 = next2;
  }
};

let head = [1, 2, 3, 4, 5];
console.log(reorderList(head));
