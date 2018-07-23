var alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split("");


var $newGameButton = document.getElementById('new-game-button');
var $placeholders = document.getElementById('placeholders'); 
var $guessedLetters = document.getElementById('guessed-letters'); 
var $guessesLeft = document.getElementBYId ('guesses-left'); 
var $wins = document.getElementById ('wins'); 
var $losses = document.getElementByID ('losses');


var wordBank = [ 'alert',
      'boolean', 
      'console', 
      'variable', 
      'string', 
      'prompt',
      'conditionals', 
      'concatenation',
      'scope',
      'events', 
      'arguments',
];

var wins = 0;
var losses = 0;
var guessesLeft = 8;

var gameRunning = false;

var pickedWord = "";
var lettersInPickedWord = [];
var numBlanks = 0;
var guessedLetterBank = [];
var incorrectLetterBank = [];



function newGame() {
  gameRunning= true;
  guessesLeft = 8;
  guessedLetterBank = [];
  incorrectLetterBank = [];
  pickedWordPlaceholderArr = [];		

  pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

  for(var i = 0; i < pickedWord.length; i++){
    if (pickedWord[i] === ' ') {
      pickedWordPlaceholderArr.push(' ');
    } else{
      pickedWordPlaceholderArr.push('_');
    }
  }

  $guessesLeft.textContent = guessesLeft; 
  $placeholders.textContent = pickedWordPlaceholderArr.join('');
  $guessedLetters.textContent = incorrectLetterBank;
}

function letterGuess(letter){
  console.log (letter);
  if(gameRunning === true && guessedLetterBank.indexOf(letter) === -1 ){
    guessedLetterBank.push(letter);
    
    for (var i = 0; i < pickedWord.length; i++) {
      if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
        pickedWordPlaceholderArr[i] = pickedWord[i];
      }
    }

  $placeholders.textContent = pickedWordPlaceholderArr.join('');
  checkIncorrect(letter);

  }
  else {
    if (!gameRunning){
      alert ("Click on the New Game Button to start over!");
    } else {
      alert("You've guessed this letter, try a new one!")
    }
  }

}

function checkIncorrect(letter) {
  if (
     pickedWordPlaceholderArr.indexOf(letter.toLowerCase()) === -1 
      &&
     pickedWordPlaceholderArray.indexOf(letter.toUpperCase()) === -1 
    )  {
      guessesLeft -- ;
      incorrectLetterBank.push(letter);
      $guessedLetters.textContent = incorrectLetterBank.join(' ');
      $guessesLeft.textContent = guessesLeft;
    }
    checkLoss();
}

function checkLoss(){
  if (guessesLeft === 0) {
    losses++ ;
    gameRunning = false;
    $losses.textContent = losses;
    $placeholders.textContent = pickedWord;
  }
  checkWin ();
}

function checkWin(){
  if (pickedWord.toLowerCase() === pickedWordPlaceholderArr.join('').toLowerCase())
   {
     wins++;
     gameRunning = false;
     $wins.textContent = wins;
   }
}

$newGameButton.addEventListener('click', newGame);

document.onkeyup = function(event) {
  console.dir(event);
  if(event.keyCode >= 65 && event.keyCode <= 90){
    letterGuess(event.key);
  }
}















