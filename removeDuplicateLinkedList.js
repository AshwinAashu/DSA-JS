/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.



Example 1:

Input: head = [1,1,2]
Output: [1,2]

Example 2:

Input: head = [1,1,2,3,3]
Output: [1,2,3]



Constraints:

    The number of nodes in the list is in the range [0, 300].
    -100 <= Node.val <= 100
    The list is guaranteed to be sorted in ascending order.
*/

const deleteDuplicates = (head) =>{

  let curr = head;

   if(head ===  null) return head;
   else{
       let temp= curr.next;
     while(temp!= null){
       //if the values are not equal, move current node to temp
       if(curr.val !== temp.val){
         curr.next = temp;
         curr = temp;
       }
       //move temp to next
       temp = temp.next;
         //if the iteration takes it to the last element where temp.next is null.
         if(temp === null && curr.next){
             if(curr.next.val === curr.val){
                 curr.next = null;
             }
         }

     }

   }
   return head;
}
