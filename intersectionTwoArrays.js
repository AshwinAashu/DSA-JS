// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays
// and you may return the result in any order.


// Example 1:
//
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
//
// Example 2:
//
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.


let intersectionTwoArrays = (nums1, nums2) => {
  let nums1len = nums1.length;
  let nums2len = nums2.length;
  let resArr  = [];
  let primaryArr , secondaryArr ;

  if(nums1len >= nums2len){
    primaryArr = nums2 ;
    secondaryArr = nums1 ;
  } else{
    primaryArr = nums1 ;
    secondaryArr = nums2;
  }

  for(let i = 0; i <primaryArr.length; i++){
    if(secondaryArr.indexOf(primaryArr[i]) !== -1){
      resArr.push(primaryArr[i]);
      secondaryArr.splice(secondaryArr.indexOf(primaryArr[i]), 1);
    }
  }
  return resArr;
}


console.log(intersectionTwoArrays([1,2,2,1],[2,2] ));;
console.log(intersectionTwoArrays([4,9,5],[9,4,9,8,4]));
