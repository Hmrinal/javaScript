var readlineSync = require('readline-sync');

var score = 0;
var userName = readlineSync.question("Please enter your name:  ");
console.log("Welcome "+ userName + "! Dive into the game for this fun quiz");