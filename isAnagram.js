/*Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

Constraints:

    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.
*/

const isAnagram = (s,t) =>{


  if(s.length!=t.length){
    return false;
  }else{

    let freqS = {};
    let freqT = {};
    //populating the frequency of letters in s
    [...s].map((letter)=>{
      if( freqS[letter] ){
        freqS[letter] +=1 ;
      }else{
        freqS[letter] = 1;
      }
    });

    //populate the frequency of the letters in t
    [...t].map((letter)=>{
      if( freqT[letter] ){
        freqT[letter] +=1 ;
      }else{
        freqT[letter] = 1;
      }
    });

    for(let i in freqT){
      if(freqS[i]!=freqT[i]){
        return false;
      }
    }
    return true;
  }
}

console.log(isAnagram("anagram","nagaram"));
console.log(isAnagram("car","rac"));
console.log(isAnagram("car", "mat"));
console.log(isAnagram("anagram","nagram"));
