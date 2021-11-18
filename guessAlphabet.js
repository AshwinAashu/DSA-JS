//complete the function guessAlphabet. The function takes in an array of alphabets
//and returns the number of correct and incorrect guesses.
//assume an alphabet is only present once. Let users know when all the alphabets have
//been guessed. All inputs are in smallcase.


function guessAlphabet(arr){
  let correct = 0;
  let wrong = 0;

  //remove the element once guessed
  function removeElement(array, element){
    const ind = array.indexOf(element);
    array.splice(ind, 1);
    console.log(arr);
  }

  //check if there are any elements left to guess
  function checkEle(arr){
    if(arr.length ===0){
      return console.log("All the elements have been guessed");
    }
  }

  return (answer)=>{
    console.log("array:",arr);
    //check if correct and remove ; else try again
    if(arr.includes(answer)){
      correct++;
      removeElement(arr, answer);
      console.log("Correct!", "Score: correct: ", correct, "wrong:" , wrong);
      checkEle(arr);
    }else{
      checkEle(arr);
      wrong++;
      console.log("oops, let's try this again","Score: correct", correct, "wrong:", wrong);

    }
  }
}

const arr = ['a','z','k','l'];
const answerAlphabet = guessAlphabet(arr);
answerAlphabet('a');
answerAlphabet('z');
answerAlphabet('h');
answerAlphabet('j');
answerAlphabet('l');
answerAlphabet('k');
answerAlphabet('d');
