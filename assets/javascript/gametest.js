 //JS HANGMAN WITH DETAILED COMMENTS AND PSEUDOCODE FOR FUTURE REFERENCE AND UNDERSTANDING

 //DOM ELEMENTS
 var $newGameButton = document.getElementById("submit-button");
 var $wins = document.getElementById("wins");
 var $losses = document.getElementById("losses");
 var $placeHolderLetter = document.getElementById("placeholderletter");
 var $guessesLeft = document.getElementById("guessesleft");
 var $guessedLetters = document.getElementById("guessedletters");
 
 
 // ////////////////////VARIABLES/////////////////////

 // WORD BANK
 //Word Bank Array - Words the computer chooses and the user tries to guess. 
 /* Created an array for the word bank. I set the array to the variable wordBank */
 var wordBank = [
    "array",
    "boolean", 
    "console", 
    "variable", 
    "string", 
    "prompt",
    "objects", 
    "conditionals", 
    "concatenation",
    "scope",
    "events", 
    "arguments",
 ]


 //USER TYPES GUESS USING ALPHABET LETTERS 

 // Alphabet Array: letters the users uses to guess the words from the word bank. 
 /* created a variable containing the alphabets that the user will use to guess words for
 the game. One way of creating this variable is to put each alphabet letter (separating each 
 with quotes) in an array. However, "javascript has a very useful method for spliting a string
 by a character and creating a new array out of the sections. We will use the split() method 
 to separate the array by a white space character, represented by " ".  
 reference source : https://www.digitalocean.com/community/tutorials/how-to-index-split-and-manipulate-strings-in-javascript */
 
 var alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split("");

 //OTHER VARIABLES THAT NEED TO BE SET - note: clarify this later

 //USER WINS AND LOSSES 
 /* Scope determined the visibility of variables. Global scope means the variable 
 is declared outside of the function, and all scripts and functions on a web page
 can access it :https://www.w3schools.com/js/js_scope.asp
 When the game starts, the user's win and losses is set to zero. 
 This must be declared as a global variable, so that it can be 
 accessible to all functions throughout the program. Otherwise, 
 the scores will fail to increase when a user wins, etc. */

 var gameRunning = false;
 var wins = 0; 
 var losses = 0;
 var guessesLeft = 10 ;
 var currentWord = " ";
 var currentWordArray = [];
 var correctlyGuessedLetters = [];
 var wronglyGuessedLetters = []; 


//FUNCTIONS 
function initializeGame (){
    gameRunning = true;
    guessesLeft = 10;
    correctlyGuessedLetters = [];
    wronglyGuessedLetters = [];
    currentWordArray = [];
    currentWord = wordBank[Math.floor(Math.random()* wordBank.length)];

    for ( var i = 0; i < currentWord.length; i++) {
        
        if (currentWord[i]=== " ") {
            currentWordArray.push(" ");
        }  else {
            currentWordArray.push("_");
        }
    }
}

//DOM 

$guessesLeft.textcontent = guessLeft;
$placeHolderLetter.textcontent = currentWordArray.join("");
$GuessedLetters.textcontent = wronglyGuessedLetters;


function letterGuess (letter) {
    console.log(letter);
    if (gameRunning && correctlyGuessedLetters.indexOf(letter) === -1){
        //run game
    } else {
        if (!gameRunning){
         alert ("Game is not running! Click on new game button to start over!");
        } else {
            alert ("You've already guessed this letter, try a new one");
        }
    }
}



$newGameButton.addEventListener('click', initializeGame);