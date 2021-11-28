/* hackerrank :https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem?isFullScreen=true
Delete the node at a given position in a linked list and return a reference to the head node. The head is at position 0. The list may be empty after you delete the node. In that case, return a null value.
*/


const removeElement = (llist, position)=>{
  const curr = llist;
  if(curr === null) return curr;
  else if(curr.next === null) return null;
  else if(position === 0){
     return curr.next;
 }
  else{
    for(let i =0 ; i<position-1;i++){
      curr = curr.next;
    }
    let temp = curr.next;
    curr.next = temp.next;
  }
  return lllist;
}
