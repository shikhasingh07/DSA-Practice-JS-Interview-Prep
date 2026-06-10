var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next
  return dummy.next;
};
