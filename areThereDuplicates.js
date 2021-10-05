//Implement a function known as areThereDuplicates which accepts a variable number of
//arguments , and checks whether there are any duplicates among the arguments
//passed in .
//Examples:
//areThereDuplicates(1,3,2) //false
//areThereDuplicates(1,2,2) //true
//areThereDuplicates(1,5,9,5) //true



//Approach - used arguments object to solve this. created a set of unique values and matched with the length of the arguments
function areThereDuplicates(){
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1,5,9,5));
console.log(areThereDuplicates(1,3,2));
console.log(areThereDuplicates(1,2,2));
