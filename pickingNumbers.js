//Picking Numbers - HackerRank
// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to
//
// Function Description
//
// Complete the pickingNumbers function in the editor below.
//
// pickingNumbers has the following parameter(s):
//
//     int a[n]: an array of integers
//
// Returns
//
//     int: the length of the longest subarray that meets the criterion
//
// Sample Input 0
// 6
// 4 6 5 3 3 1
// Sample Output 0
// 3
//submissionLink :  https://www.hackerrank.com/challenges/picking-numbers/submissions/code/236975012

function pickingNumbers(a){
    //Approach -
    //count the number of the integer and one  below that.
    let count = 0;
    let maxCount= 0;
    const LEN_ARR = a.length;
    const b = new Set(a);

    const countNum = (num) =>{
        count= 0;
        for( let i = 0; i < LEN_ARR; i++) {
            if(a[i] === num|| a[i] === num-1){
                count++;
            }
        }
        return count;
    }

    b.forEach(val =>{
        let countJ = countNum(val);
        countJ > maxCount ? maxCount = countJ :0;
    });


    return maxCount;

}
