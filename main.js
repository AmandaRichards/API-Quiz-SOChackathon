//PLAN
//Take username - LATER
//Basic Trivia Question Game, based on Geography
//3 difficulties(easy,med,hard) -- Later
//Question is presented based on difficulty selected 
    //
//Multiple Choice answers presented on buttons
// 1 correct, light up green using click event listener
// 3 wrong turn red "" ""
//Collate scores
//Present username and score out of 10.

//HTML PLAN
//Header with name of game 
//Username header
//Image 
//4 Buttons on page 
//Score header
//

//CSS PLAN

let arrayOfQuestions = [];
let newQuestion = document.querySelector("#questionbutton");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let button4 = document.querySelector("#button4");

//let newArray = [button1, button2, button3, button4]

//let random = 
let answer1;
let answer2;
let answer3;
let answer4;


async function getTrivia() {
    const response = await fetch("https://opentdb.com/api.php?amount=10&category=22&type=multiple");
    arrayOfQuestions = await response.json();
   
    let questions = document.querySelector("#questions");
   questions.innerText = arrayOfQuestions.results[0]["question"].replace(/(&quot\;)/g,"\"").replace(/(&#039\;)/g,"\"");
console.log(arrayOfQuestions);



answer1 = arrayOfQuestions.results[0]["correct_answer"];
answer2 = arrayOfQuestions.results[0]["incorrect_answers"][0];
answer3 = arrayOfQuestions.results[0]["incorrect_answers"][1];
answer4 = arrayOfQuestions.results[0]["incorrect_answers"][2];

let newArray = [answer1, answer2, answer3, answer4];
let answerArray = newArray.sort(() => Math.random() - 0.5);


button1.innerText = answerArray[0];
button2.innerText = answerArray[1]; 
button3.innerText = answerArray[2]; 
button4.innerText = answerArray[3]; 

button1.style.backgroundColor = '#C4D7F2'
button2.style.backgroundColor = '#C4D7F2'
button3.style.backgroundColor = '#C4D7F2'
button4.style.backgroundColor = '#C4D7F2'
}


getTrivia();

newQuestion.addEventListener("click", getTrivia);

//when button clicked, button changes colour and this answer is stored as your answer
//compare your answer to the correct answer
//if your answer === correct answer score++

let yourAnswer;
let yourScore = 0;
let score = document.querySelector("#score");

score.innerText = `Score ${yourScore}`;

function buttonClick(event){
yourAnswer = event.target.innerText;
event.target.style.backgroundColor = '#EF3054'
if(yourAnswer === answer1){
   yourScore++;
   event.target.style.backgroundColor = '#CAFF8A'
   return score.innerText = `Score: ${yourScore}`;
}
}

button1.addEventListener("click", buttonClick);
button2.addEventListener("click", buttonClick);
button3.addEventListener("click", buttonClick);
button4.addEventListener("click", buttonClick);




