
var wordBank = [
  "alert",
  "boolean",
  "console",
  "variable",
  "string",
  "prompt",
  "conditionals",
  "scope",
  "concatenations"
];


var win = 0;
var loss = 0;
var maxGuesses = 9;
var gameRunning = false;

var guessedWord = "";
var guessedLetters = [];
var correctGuesses = [];
var wrongGuesses = [];


var wordBlanks = 0;


function startGame() {
  
  maxGuesses = 9;

  guessedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
 
  guessedLetters = guessedWord.split("");
  
  wordBlanks = guessedLetters.length;

  correctGuesses = [];

  wrongGuesses = [];

  for (var i = 0; i < wordBlanks; i++) {
    correctGuesses.push("_");
  }

 
  document.getElementById("guesses-left").innerHTML = maxGuesses;

  document.getElementById("word-blanks").innerHTML = correctGuesses.join(" ");

  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letter) {

  var letterInWord = false;

  for (var i = 0; i < wordBlanks; i++) {
    if (guessedWord[i] === letter) {
      letterInWord = true;
    }
  }

  
  if (letterInWord) {
    for (i = 0; i < wordBlanks; i++) {
      if (guessedWord[i] === letter) {      
        correctGuesses[i] = letter;
      }
    }
   
  }

  else {
    wrongGuesses.push(letter);
    maxGuesses--;
  }
}

function roundComplete() {

  document.getElementById("guesses-left").innerHTML = maxGuesses;
  document.getElementById("word-blanks").innerHTML = correctGuesses.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  if (guessedLetters.toString() === correctGuesses.toString()) {
  
    win++;
    alert("You win!");

    document.getElementById("win-counter").innerHTML = win;
    startGame();
  }

  else if (maxGuesses === 0) {
    loss++;
    alert("You lose!");

    document.getElementById("loss-counter").innerHTML = loss;
    startGame();
  }

}

startGame();

document.onkeyup = function(event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();
};