// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
//
//
// Example 1:
//
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
//
// Example 2:
//
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


const longestCommonPrefix = (strs) => {
  for(let i= 0; i< strs.length-1;i++){
    for(let j = 0; j < strs[i].length;j++){
      let ansIndex;
      strs[i][j] === strs[i+1][j] ? ansIndex = j;
    }
  }
}
