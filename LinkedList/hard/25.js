function reverse(head ,stop){

    let prev = null
    let curr = head;

    while(curr !== stop){
        let next = curr.next; 
        curr.next = prev;
        prev = curr; 
        curr = next;
    }

    return prev;
}

var reverseKGroup = function (head, k) {
  // check if k nodes exist
  let curr = head;
  for (let i = 0; i < k; i++) {
    if (curr === null) return head; // k nodes nahi hain
    curr = curr.next;
  }

  let newHead = reverse(head,curr);  
  head.next = reverseKGroup(curr, k);
  return newHead;

};
let head = [1, 2, 3, 4, 5],
  k = 2;
console.log(reverseKGroup(head, 2));
