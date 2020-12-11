var readlineSync = require('readline-sync');

var score = 0;
console.log("Suits Quiz");
var userName = readlineSync.question("Please enter your name:  ");
console.log("Welcome "+ userName + "! Dive into the game for this fun quiz...");

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Yay! You guessed it right.");
    score = score+1;
  }else{
    console.log("Opps! That's incorrect.");
  }
  console.log("score "+score);
  console.log("-------------");
}

var questions=[{
  question:`Suits is set in a fictional law firm in ________?
  a: Atlanta
  b: Austin
  c: New York City
  d: Chicago 
  ` ,
  answer:"c"
},{
  question:"What can be his Costume Color? ",
  answer:"blue"
}];

for(var i=0; i < questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}