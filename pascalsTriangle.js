/*Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:

Input: numRows = 1
Output: [[1]]
*/

const pascalTriangle =  (numRows) =>{
  let init = 1;
  let pasArr = [init,init];
  let resArr = [];

  for(let count=0; count<numRows-1; count++){
    resArr.push(pasArr);
    let ele =[];
    for(let i = 0 ; i<pasArr.length-1;i++){
      ele.push( pasArr[i]+pasArr[i+1] );
    }
    pasArr = [init, ...ele, init];
  }
  resArr.unshift([init]);
  return resArr;
};

pascalTriangle(5);
