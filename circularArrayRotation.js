//circularArrayRotation - HackerRank
// John Watson knows of an operation called a right circular rotation on an array of integers. One rotation operation moves the last array element to the first position and shifts all remaining elements right one. To test Sherlock's abilities, Watson provides Sherlock with an array of integers. Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.
//
// For each array, perform a number of right circular rotations and return the values of the elements at the given indices.
//a = the array
//k = the no of rotations
//queries = the indices post rotation to be returned. 


function circularArrayRotation(a, k, queries) {
    for(let i = 0; i < k; i++){
      let temp = a.pop();
      a.unshift(temp);
    }
    for(let j = 0; j<queries.length; j++){
      let temp = queries[j];
      queries[j] = a[temp];
    }

    return queries;
}




let a = [39356, 87674, 16667, 54260, 43958, 70429, 53682, 6169, 87496, 66190, 90286, 4912, 44792, 65142, 36183, 43856, 77633, 38902, 1407, 88185, 80399, 72940, 97555, 23941, 96271, 49288, 27021, 32032, 75662, 69161, 33581, 15017, 56835, 66599, 69277, 17144, 37027, 39310, 23312, 24523, 5499, 13597, 45786 ,66642, 95090 ,98320 ,26849, 72722, 37221, 28255 ,60906]
console.log(circularArrayRotation(a, 51, [2,10,47,48]));
