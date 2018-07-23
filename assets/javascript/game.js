 //JS HANGMAN WITH DETAILED COMMENTS AND PSEUDOCODE FOR FUTURE REFERENCE AND UNDERSTANDING

 // ////////////////////VARIABLES /////////////////////

 // COMPUTER CHOOSES RANDOM WORD FROM A WORD BANK
 //Word Bank Array - Words the computer chooses and the user tries to guess. 
 /* Created an array for the word bank. I set the array to the variable wordBank */
 var wordBank = [
    "array",
    "boolean", 
    "console", 
    "variable", 
    "string", 
    "prompt",
    "alert",
    "function",
    "dom", 
    "loops", 
    "objects", 
    "conditionals", 
    "concatenation",
    "scope",
    "events", 
    "arguments", 
    "length", 
    "push",
    "true",
    "false", 
    "if", 
    "comparison",
    "truthy",
    "falsy", 
    "statement"
 ];

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

 var userWins = 0; 
 var userLosses = 0;
 var wordGuess = "";
 var correctlyGuessedLetters= [];
 var wronglyGuessedLetters = []; 
 var guessesLeft = 8;

 
