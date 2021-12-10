/* Given a pointer to the head of a singly-linked list,
print each data value from the reversed list. If the given list is empty,
do not print anything.
*/

function  printReverse(llist){
  //llist is the pointer to the first link

  if(llist){
          reversePrint(llist.next);
          console.log(llist.data);
      }

}
