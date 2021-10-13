//TwoSum - https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]


function twoSum(nums, target){
  let dic ={};
  let num1 =nums.length;
  for(let i=0; i<num1; i++){
    let curr = nums[i];
    let diff =  target - curr;
    if(dic[diff] != null){
      return [i, dic[diff]];
    }
    dic[curr] = i;
  }
}

console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,2,4],6));
console.log(twoSum([3,3],6));
