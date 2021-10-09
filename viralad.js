//viralAd -  https://www.hackerrank.com/challenges/strange-advertising/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
//HackerLand Enterprise is adopting a new viral advertising strategy. When they launch a new product, they advertise it to exactly
// 5 people on social media.
//
// On the first day, half of those
// people (i.e., 2  ) like the advertisement and each shares it with 3 of their friends. At the beginning of the second day, 2*3 = 6
//
// people receive the advertisement.
//
// Each day , floor(recipients/2),
// of the recipients like the advertisement and will share it with  3 friends on the following day. Assuming nobody receives the advertisement twice, determine how many people have liked the ad by the end of a given day, beginning with launch day as day 1.

function viralAdvertising(n) {
    // Write your code here
    let cul = 2;
    let liked = 2;
    let shared = 5;
   if(n===1 ){
       return 2;
   }
   else{
        for(let i = 1; i < n; i++){
            shared = liked * 3;
            liked = Math.floor(shared/2);
            cul += liked;

        }
    }

    return cul;
}
