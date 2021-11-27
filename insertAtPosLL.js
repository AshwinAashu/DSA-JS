/*
hackerrank : https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem?isFullScreen=true


Given the pointer to the head node of a linked list and an integer to insert at a certain position, create a new node with the given integer as its

attribute, insert this node at the desired position and return the head node.

A position of 0 indicates head, a position of 1 indicates one node away from the head and so on. The head pointer given may be null meaning that the initial list is empty.
*/
function  insertAtPos(llist, data, position){

  const curr = new SinglyLinkedListNode(data);
   let lNode = llist;
   for(let i = 0; i<position-1; i++){
       if(lNode.next!= null){
           lNode = lNode.next;
       }
   }

   curr.next = lNode.next;
   lNode.next = curr;
   return llist;
}
