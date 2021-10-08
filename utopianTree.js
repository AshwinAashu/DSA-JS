//Utopian Tree - https://www.hackerrank.com/challenges/utopian-tree/problem
//The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

// A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after
//
// growth cycles?
//
// For example, if the number of growth cycles is n = 5
// , the calculations are as follows:
// Function Description
//
// Complete the utopianTree function in the editor below.
//
// utopianTree has the following parameter(s):
//
//     int n: the number of growth cycles to simulate
//
// Returns
//
//     int: the height of the tree after the given number of cycles
//
// Input Format
//
// The first line contains an integer t,
// , the number of test cases.
// t subsequent lines each contain an integer,n , the number of cycles for that test case.
let n =  [3, 5, 2]
let t = 3;
function utopianTree(n){
  let isDouble =  true;
  let h = 1;
  for(let i = 1  ; i <= n ; i++){
    isDouble ? h = h*2 : h= h+1;
    isDouble = !isDouble;
  }
  return console.log(h);
}

for(let i = 0; i<t;i++) {
  utopianTree(n[i]);
}
