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
  question:` Which network airs 'Suits?'
  a: USA
  b: NBC
  c: CBS
  d: TNT
  ` ,
  answer:"a"
},{
  question:` Who is the female shark in charge of the 'Suits' law firm?
  a: Rachel Zane
  b: Donna Paulsen
  c: Katrina Bennett
  d: Jessica Pearson
  ` ,
  answer:"d"
},{
  question:` The firm hires law graduates from ________?
  a: Yale
  b: Columbia
  c: Harvard
  d: Stanford
  ` ,
  answer:"c"
},{
  question:` _____ is the firm's expert on all financial matters?
  a: Charles Forstman
  b: Robert Zane
  c: Jeff Malone
  d: Louis Litt
  ` ,
  answer:"d"
}
];

for(var i=0; i < questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}