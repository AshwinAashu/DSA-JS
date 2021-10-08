// A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, the professor decides to cancel class if fewer than some number of students are present when class starts. Arrival times go from on time (t<=0) to arrived late (t>0).
//
// Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.

//K is the threshold of students that must be present , a is the arrival time of the students.
function isClassCancelled(k, a){
  let count = 0;
  a.forEach((time)=>{
    time <= 0 ? count +=1:0;
  })
  return count >= k ? "cancelled" :  "not cancelled";
}

console.log(isClassCancelled(3, [0,-1,-2,2,2,2, 2,0,-5]))
console.log(isClassCancelled(4,[-93,-86,49,-62,-90,-63,40,72,11,67]))
console.log(isClassCancelled(10,[23,-35,-2,58,-67,-56,-42,-73,-19,37]))
