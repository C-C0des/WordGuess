
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

  
 var win = 0;
 var loss = 0;
 var guessesLeft = 9; 

 var guessedWord = "";
 var lettersInGuessedWord = [];
 var numBlanks = 0;
 var correctGuesses = [];
 var wrongGuesses = [];
  

  function newGame() {
   
    guessesLeft = 9;
    guessedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    lettersInGuessedWord = guessedWord.split("");
    numBlanks = lettersInGuessedWord.length;
  
    // 
    console.log(guessedWord);
    //
  
    
    correctGuesses = [];
    wrongGuesses = [];
  
    
    for (var i = 0; i < numBlanks; i++) {
      correctGuesses.push("_");
    }
  
    //
    console.log(correctGuesses);
    //
  

    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("placeholder").innerHTML = correctGuesses.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
  }
  
 
    function checkLetters(letter) {
         var letterInWord = false;
  
         for (var i = 0; i < numBlanks; i++) {
             if (guessedWord[i] === letter) { letterInWord = true; }
             }
  
   
         if (letterInWord) {
             for (i = 0; i < numBlanks; i++) {
                 if (guessedWord[i] === letter) {
          correctGuesses[i] = letter;
        }
      }
      //
      console.log(correctGuesses);
      //
    }
 
    else {
      wrongGuesses.push(letter);
      guessesLeft--;
    }
  }
  
  function roundComplete() {
   //
    console.log("WinCount: " + win + " | LossCount: " + loss + " | GuessesLeft: " + guessesLeft);
   //
   
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("placeholders").innerHTML = correctGuesses.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
  
    
    if (lettersInGuessedWord.toString() === correctGuesses.toString()) {
      win++;
      alert(" You win!");
  
      document.getElementById("wins").innerHTML = win;
      startGame();
    }
  
  
    else if (guessesLeft === 0) {
      loss++;
       alert("You lose!");
      document.getElementById("loss").innerHTML = loss;   
      newGame();
    }
  
  }
  
  // CALL NEW GAME 
   newGame();

  document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
  };