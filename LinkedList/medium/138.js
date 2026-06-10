var copyRandomList = function (head) {
  let map = new Map();
  let curr = head;
  while (curr !== null) {
    map.set(curr, new Node(curr.val));
    curr = curr.next;
  }

  curr = head;
  while (curr !== null) {
    map.get(curr).next = map.get(curr.next) ?? null;
    map.get(curr).random =  map.get(curr.random) ??  null;
    curr = curr.next;
  }

  return map.get(head);
};
let head = [
  [7, null],
  [13, 0],
  [11, 4],
  [10, 2],
  [1, 0],
];
console.log(copyRandomList(head));
