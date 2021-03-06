//Write a function averagePair. Given a sorted array of integers and a target
//average, determine if there is a pair of values in the array where the average
//pair equals the target average. There may be more than one pair that matches the
//the target value.

//constraints
//time complexity : O(N)
//space compplecity : O(1)


//examples
//averagePair([1,2,3],2.5) -> true
//averagePair([1,3,3,5,6,7,10,12,19],8) -> true
//averagePair([-1,0,3,4,5,6],4.1) ->false
//averagePair([],4) -> false

function averagePair(arr, targetAvg){
  if(arr.length === 0 && targetAvg !== 0){
    return false;
  }

  let target = targetAvg * 2;
  let i = 0;
  // for(let j=1; j <arr.length; j++){
  //
  //   if(arr[j] !== (target-arr[i])){
  //     i++;
  //   }
  //   else if(arr[j] === (target-arr[i])){
  //     return true;
  //   }
  //
  // }
  return false;

}
console.log(averagePair([],4));
console.log(averagePair([1,3,3,5,6,7,10,12,19],8));
console.log(averagePair([1,2,3],2.5));
console.log(averagePair([-1,0,3,4,5,6],4.1));
