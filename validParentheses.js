/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.



Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

Example 4:

Input: s = "([)]"
Output: false

Example 5:

Input: s = "{[]}"
Output: true
*/


let validPara = (s)=>{
  const  stack = [];
  let bracketMap = {
    '}':'{',
    ')':'(',
    ']':'['
  }

  if(const item of s){
    //if it is an open bracket, add it without question
    if(!bracketMap[item]){
      stack.push(item);
    }
    //if it is a closing tag, check if such a closing containing  is already present
    else if(stack.pop()!== bracketMap[item]){
      return false;
    }

  }
  return !stack.length;
}
