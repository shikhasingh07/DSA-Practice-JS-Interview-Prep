var isPalindrome = function (head) {
  // find mid
  // reverse second half
  //  compare

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;

  while (slow !== null) {
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  let left = head;
  let right = prev;

  while (right !== null) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }
  return true;
};

let head = [1, 2, 2, 1];
console.log(isPalindrome(head));
