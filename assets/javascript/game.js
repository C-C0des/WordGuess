 //JS HANGMAN WITH COMMENTS FOR FUTURE REFERENCE 

 // VARIABLES 
 
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


 /* created a variable containing the alphabets that the user will use to guess words
 the game. One way of creating this variable is to put each alphabet letter (separating each 
 with quotes) in an array. However, "javascript has a very useful method for spliting a string
 by a character and creating a new array out of the sections. We will use the split() method 
 to separate the array by a white space character, represented by " ".  
 reference source : https://www.digitalocean.com/community/tutorials/how-to-index-split-and-manipulate-strings-in-javascript */
 
 var alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split("");

