 /*Reshape the Matrix
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.
You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.
The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.
If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

*/

// Example 1:
//
// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]

// Example 2:
//
// Input: mat = [[1,2],[3,4]], r = 2, c = 4
// Output: [[1,2],[3,4]]


// Constraints:
//
//     m == mat.length
//     n == mat[i].length
//     1 <= m, n <= 100
//     -1000 <= mat[i][j] <= 1000
//     1 <= r, c <= 300


const reshapeMatrix = (mat, r,c) =>{
  let m =  mat.length;
  let n = mat[0].length;
  let nmat = []; //new matrix to return
  let resMat =[];
  if(m*n !== r*c){
    return mat;
  }else{
    //converting the 2D array to 1D array
    for(let i = 0 ; i<m;i++){
      for(let j =0; j<n; j++){
        nmat[i*n+j] = mat[i][j];
      }
    }
    console.log(nmat);
    if(r===1){
      return [nmat];
    }else{
      //restructuring the 1D to required 2D array
      for(let i=0; i<r; i++){
          resMat = [...resMat, nmat.slice(i*c,c*i+c)]
      }
      return resMat;
    }
  }
}

reshapeMatrix([[1,2],[3,4]], 1, 4);
reshapeMatrix([[1,2,5,7],[3,4,4,7]], 4, 2);
console.log(reshapeMatrix([[1,2],[3,4]],4,1));
