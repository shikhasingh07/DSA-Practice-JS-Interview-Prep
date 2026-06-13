var deleteDuplicates = function(head) {
 
    if(head === null){
        return head;
    }

    let curr = head; 

    while(curr !== null && curr.next !== null){
        if(curr.val === curr.next.val){
            curr.next = curr.next.next; 
        }else {
            curr = curr.next;
        }
    }
};