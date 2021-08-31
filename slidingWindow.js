//sliding window are problems where a unique  subset of continuous values are to be found. It involves  creating a 'window'  which can be either an array  or number from one position to another. Depending on a certain condition, the window either  increases or closes (and a new window is created).

//Write a function which accepts an array of integers and a number called 'n'. The function should calculate the maximum sum  of n consecutive elements in the array and null if there are none . Negative numbers are also allowed.
//-----------------------------
//naive approach (O(N^2))
//------------------------------
// function maxSumSubArr(arr, num){
//   if(num> arr.length){
//     return null;
//   }
//   let max = -Infinity;
//   for(  let i =0; i <arr.length - num + 1 ; i++){
//     let temp = 0;
//     for(let j =0; j<num; j++){
//       temp+= arr[i+j] ;
//     }
//     if(temp>max){
//       max= temp;
//     }
//   }
//   return max;
// }
// let arr = [2,5,6,2,8,9];
// console.log(maxSumSubArr(arr,3));


//------------------------------
//Re-factored (O(N))
//------------------------------
function maxSubArr(arr, num){
  let maxSum = 0;
  let tempSum =0;
  if(arr.length<num) return null;
  for(let i = 0 ; i <num; i++){
    maxSum += arr[i];
  }
  tempSum =  maxSum;
  for(let i = num; i <arr.length-1; i++){
    tempSum = tempSum - arr[i-num]+arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}
let arr = [1,23,65,89,545,1,25,65,87,87,95,12,10,23,65,56]
console.log(maxSubArr(arr, 6));
