/*Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true



Constraints:

  1 <= ransomNote.length, magazine.length <= 105
  ransomNote and magazine consist of lowercase English letters.

*/

const canConstruct = (ransomNote, magazine) =>{
  let freqNote = {};
  let freqMag = {};

  //populate the frequency of the letters in required note
  [...ransomNote].map((letter)=>{
    if( freqNote[letter] ){
      freqNote[letter] +=1 ;
    }else{
      freqNote[letter] = 1;
    }
  });

  //populate the frequency of the letters in magazine
  [...magazine].map((letter)=>{
    if( freqMag[letter] ){
      freqMag[letter] +=1 ;
    }else{
      freqMag[letter] = 1;
    }
  });

  //compare the frequencies  of both
  // console.log(freqMag,freqNote);
    for(let i in freqNote){
      if(freqMag[i]<freqNote[i] || freqMag[i]===undefined ){

        return false;
      }
      console.log(freqMag[i]);
    }

    return true;
}

console.log(canConstruct("a","b"));
console.log(canConstruct("aa","aab"));
console.log(canConstruct("bg",
"efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"));
console.log(canConstruct("fihjjjjei",
"hjibagacbhadfaefdjaeaebgi"
))
