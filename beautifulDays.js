//Problem : https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem?isFullScreen=true
//input : Starting date  i , end date  j and an integer k.
//return count of days between i and j that fulfill the condition of 'beautiful days'
// a beautiful day is when the reverse of a date is substracted from the date and
// then divided by the integer k, is perfectly divisible.

function beautifulDays(i,j,k){
let count = 0;

    for(let x = i; x <=j ; x++){
        let revDate = parseInt( x.toString().split('').reverse().join(''));
        ( x - revDate ) %  k === 0 ? count+=1 :0 ;

    }

    return count;
}
