//isPalindrome :https://leetcode.com/problems/palindrome-number/
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// Input: x = 121
// Output: true

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up: Could you solve it without converting the integer to a string?

const isPalindrome = (x) =>{
  let isSigned = Math.sign(x)

  if(isSigned ===1 || x===0){
    let num = x;
    let d = 0;
    while(num>0){
      d = d*10 +  num%10
      num = Math.floor(num/10);
    }

    return d===x ? true: false;

  }else return false;

}

console.log(isPalindrome(0));
