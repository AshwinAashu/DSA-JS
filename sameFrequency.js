//Write a function called sameFrequency. Given two positive integers, find count
//if the two numbers have the same frequency of digits.
//Solution must have the time complexity of O(N)
//Test samples :
//sameFrequency(182,281) -> true
//sameFrequency(34,14) -> false
//sameFrequency(3589578,5873859) -> true
//sameFrequency(22,222) -> false


//Approach - first try to see how many same digits are present
//in the number. Then try to compare the length to that of the second number . if the lengths are the same then return true or else false
function sameFrequency(num1, num2){
  // let countSame = 1;
  // let countSecond = 0;
  let number1arr = String(num1).split("").map((num1) =>{
    return Number(num1)
  });
  let number2arr = String(num2).split("").map((num2) =>{
    return Number(num2)
  });

  number1arr =  number1arr.sort(function(a,b){return a - b});
  number2arr =  number2arr.sort(function(a,b){return a - b});

  if(number1arr.length  !== number2arr.length){
    return false;
  }
  else{
    for(let i =0 ; i<number2arr.length; i++){
      if(number1arr[i] !== number2arr[i]){
        return false;
      }
    }
    return true;
  }


}
console.log(sameFrequency(182,281))
console.log(sameFrequency(34,14))
console.log(sameFrequency(3589578,5873859))
console.log(sameFrequency(22,222))
