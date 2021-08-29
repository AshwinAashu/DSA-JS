//for a given sorted array, find the number of unique values present in the array
//Negative values are also allowed to be a part of  the array

function uniqueVal(arr){
  let count = 1;
  //checking for empty arrays
  if(arr.length === 0 ){
    return 0;
  }
  
  //iterating from the start of the array
  for(let i = 0; i < arr.length-1; i++){
    // choosing the value next to i for comparision
    let j = i+1;
    //in case they are the same
    if(arr[i] !== arr[j]){
      //updating index i
      count++;
    }
  }
  return count;
}
let arr = [-2,-1,0,1,7,7,7,12,12,13];//7
let arr2 = [1,1,1,1,1,2]; //2
console.log( uniqueVal(arr) );
console.log( uniqueVal(arr2) );
console.log( uniqueVal([]) ); //0
