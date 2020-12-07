// E14
var readlineSync = require('readline-sync');

var userName = readlineSync.question("May I know your name? ");
console.log("Welcome "+ userName + "! Do you know me? ");

// play function
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You guessed it right! ");
  }else{
    console.log("You guessed it wrong! ");
  }
}

// call funtion

/* play("Who's my favorite Superhero? ","Superman");
play("Guess his costumeColor? ","blue");
*/
// object
var questionOne={
  question:"Who's my favorite Superhero? ",
  answer:"Superman"
}
var questionTwo={
  question:"Guess his costumeColor? ",
  answer:"blue"
}

// array
var questions=[questionOne,questionTwo];
/*var questions=[{
  question:"Who's my favorite Superhero? ",
  answer:"Superman"
},{
  question:"Guess his costumeColor? ",
  answer:"blue"
}] 
Here we are making direct objects so for using this eliminate object from above
*/

// loop
for(var i=0;i<questions.length;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

