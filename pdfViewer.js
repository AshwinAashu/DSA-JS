//Design a PDF viewer
//When a contiguous block of text is selected in a PDF viewer.
// There is a list of 26 character heights aligned by index to their letters. For example, 'a' is at index 0 and 'z' is at index 25 . There will also be a string. Using the letter heights given, determine the area of the rectangle highlight in mm^2 assuming all letters are 1mm wide.

function designPdf(h,word){
  //converting the letter to lowercase and splitting each literal
  word = word.toLowerCase();
  let maxH = 0;
  for(let i = 0 ; i< word.length; i++){
    let index = word.charCodeAt(i);
    let ind =  index- 97;
    h[ind] > h[maxH] ? maxH = ind : 0;
  }
  return word.length*h[maxH];


}



designPdf([1,3,1,3,1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], abc) //9
