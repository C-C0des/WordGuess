/* ================================
        GLOBAL VARIABLES 
In this section, we will create variables
to hold useful game data for hangman.
Examples: a variable to hold the array of 
word list, a variable for the random word 
the user will guess, etc.We will also need
variables for our wins and losses.
=================================== */

////////variables for game data////////

/* 
 Var wordBank is set to the random word array. 
We will use this array to give the user a random word to guess. */
var wordBank = [
  "boolean",
  "scope",
  "variable",
  "console", 
  "alert",
  "conditionals", 
  "functions", 
];


/* 
Next we need the computer to pick a random word out of our wordBank.
But first we need to assign an empty string or empty array to the variable, 
this is because we do not know what the random word is going to be.
Later we are going to push a new word to this empty string/array, 
each time the game runs. */

var randomWord = "";


 /* In hangman, the player guesses individual letter, so we need to split that random
 word into separate letters, each letter will be its own item in an array called 
 randomWordLetters. Basically the array will hold the individual letters for the random word
 chosen. For example, if the random word is the string "alert", we need the random word Letters
 to be ["a", "l", "e", "r", "t"]*/ 

 var randomWordLetters = [];

 /* We also need to set the dashes that show up on the page. The dashes (underscores)
 need to match the number of the random word letters. So if the random word letters is
 ["a", "l", "e", "r", "t"] we need the dashes on the page to be ["_", "_", "_", "_", "_"]
 Essentially this will be the number of dashes we show based on the  random word. For now
 we will set this to zero because we do not know what the random word will be, thus we do not
 know the number of dashes that need to be on the page. */

 var wordDashes = 0;

 /* Next we need an array for the letters the users has guessed and the dashes for the letters
 the user has yet to guess. This is to show the user their progress. 
 So this will look like a l  _ _ t */ 
 var dashesAndCorrectGuesses = [];

 /* We also need an array to hold the wrong guesses, which we will
 also display to the user */
 var wrongGuesses = []; 


  var win = 0;
  var loss = 0;
  var maxGuesses = 9;
  var gameRunning = false;




function startGame() {

     /*
     When the game starts we need the computer to select a random word. 
     We will assign wordBank[index] to random word. To get a random index
     number we will use Math.floor and Math.random and mutiply this by 
     the length of the wordBank.*/
     randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
     console.log(randomWord);


     /* Next we want to split the random word into individual letters. So we can 
     use the string split method which will split a string into an array of 
     strings. Ex: ["A", "L", "E", "R", "T"]
     */
     randomWordLetters = randomWord.split("");


     /*
     Now that we have an array of individual random letters. 
     We need to display dashes that match those letters to the user. 
     First we want the dashes that will be displayed to be the number (length)
     of the random word letters
     */
     wordDashes = randomWordLetters.length;


     /* 
     Next we need to push and display those dashes to the page
     Using the join method we will join each individual _ in the dashes and 
     correct guesses array into a string */
     dashesAndCorrectGuesses = [];

     for (var i = 0; i < wordDashes; i++) {
          dashesAndCorrectGuesses.push("_");
           }
     document.getElementById("word-blanks").innerHTML = dashesAndCorrectGuesses.join(" ");
     console.log(dashesAndCorrectGuesses);
    
    
     /* We will also need to show the user the guesses they've already made so that
     they do not repeat it.   */
     wrongGuesses =[]
      document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

     // each time the game is reset, we want the max guesses to be set back to 9
     maxGuesses = 9; 
     document.getElementById("guesses-left").innerHTML = maxGuesses;
}


function checkLetters(letter) {

   var letterInWord = false;
   var incorrectLetter = null;
   
  for (var i = 0; i < wordDashes; i++) {
       
      
      if (randomWord[i] === letter) {
       
         dashesAndCorrectGuesses[i] = letter;
         letterInWord = true;
         
      } else {
        incorrectLetter = letter;
      } 
  
  } 

  if( !letterInWord) {
    maxGuesses--;
    wrongGuesses.push(incorrectLetter);
  }
  
 
}

function roundComplete() {

  document.getElementById("guesses-left").innerHTML = maxGuesses;
  document.getElementById("word-blanks").innerHTML = dashesAndCorrectGuesses.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  if (randomWordLetters.toString() === dashesAndCorrectGuesses.toString()) {
  
    win++;
    swal("You win!");

    document.getElementById("win-counter").innerHTML = win;
    startGame();
  }

  else if (maxGuesses === 0) {
    loss++;
    swal("You lose!");

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
