/*Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:

Input: s = "leetcode"
Output: 0

Example 2:

Input: s = "loveleetcode"
Output: 2

Example 3:

Input: s = "aabb"
Output: -1
*/

const firstUnique = (str)=>{
  let freq = {};
  let ans;
  [...str].map((letter)=>{
    if( freq[letter] ){
      freq[letter] +=1 ;
    }else{
      freq[letter] = 1;
    }
  });

  for(let i in freq){
    if(freq[i]===1){
      ans = i;
      break;
    }
  }
  return str.indexOf(ans);


}
console.log(firstUnique("leetcode"));
console.log(firstUnique("aabb"));
console.log(firstUnique("loveleetcode"))
