/*
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
Example 1:

Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Example 2:

Input: head = [], val = 1
Output: []

Example 3:

Input: head = [7,7,7,7], val = 7
Output: []



Constraints:

    The number of nodes in the list is in the range [0, 104].
    1 <= Node.val <= 50
    0 <= val <= 50
*/

const removeElement = (head, val) =>{
  //if the head is empty
  if(head ===null) return head;
  while(head!=null && head.val === val){
    head =head.next;
  }
  let prev = null;
  let curr = head;
  while(curr!= null){
    //if it matches, fix the corresponding references and skip an iteration.
    if(curr.val === val){
      curr = curr.next;
      prev.next = curr;
      continue;
    }
    prev = curr;
    curr= curr.next;
  }
  return head;
}
