var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0);
  let ans = dummy;
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      ans.next = list1;
      list1 = list1.next;
    } else {
      ans.next = list2;
      list2 = list2.next;
    }
    ans = ans.next;
  }

  ans.next = list1 !== null ? list1 : list2;
  return dummy.next;
};
let list1 = [1, 2, 4],
  list2 = [1, 3, 4];
console.log(mergeTwoLists(list1, list2));
