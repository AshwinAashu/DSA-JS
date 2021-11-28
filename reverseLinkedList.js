/*
Given the head of a singly linked list, reverse the list, and return the reversed list.
Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:

Input: head = [1,2]
Output: [2,1]

Example 3:

Input: head = []
Output: []
*/

const reverseList = (head) =>{
  if(head=== null) return null;
  else if(head.next=== null) return head;
  let curr = head;
  while(curr.next!=null){
    const tmp = curr.next;
    curr.next = tmp.next;
    tmp.next =head;
    head = tmp;
  }
  return head;
}
