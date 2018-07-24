
var wordsList = [
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

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

var chosenWord = "";
var lettersInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];


function startGame() {
 
  numGuesses = 9;
  chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  lettersInChosenWord = chosenWord.split("");
  numBlanks = lettersInChosenWord.length;
  blanksAndSuccesses = [];
  wrongGuesses = [];

  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }

  document.getElementById("guesses-left").innerHTML = numGuesses;
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letter) {

  var letterInWord = false;

  
  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      letterInWord = true;
    }
  }

  
  if (letterInWord) {

    for (i = 0; i < numBlanks; i++) {

      if (chosenWord[i] === letter) {
        blanksAndSuccesses[i] = letter;
      }
    }
    
  }

  else {
    wrongGuesses.push(letter);
    numGuesses--;
  }
}

function roundComplete() {

  document.getElementById("guesses-left").innerHTML = numGuesses;
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
    
    winCounter++;
    alert("You win!");

    document.getElementById("win-counter").innerHTML = winCounter;
    startGame();
  }

  else if (numGuesses === 0) {
    lossCounter++;
    alert("You lose");

    document.getElementById("loss-counter").innerHTML = lossCounter;
    startGame();
  }

}

startGame();

document.onkeyup = function(event) {
var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
 checkLetters(letterGuessed);
  roundComplete();
};