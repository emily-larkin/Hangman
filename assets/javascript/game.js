var wins = 0;
var guessing = "";
var guessesRemaining = 10;
var lettersGuessed = [];

var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var guessingText = document.getElementById("guessing-text");
var guessesRemainingText = document.getElementById("guessesRemaining-text");
var lettersGuessedText = document.getElementById("lettersGuessed-text");

var wordsToGuess = [dog, cat, horse, sheep, goat];

var wordsToGuess = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)]; {
    console.log(wordsToGuess);
}

directionsText.textContent = "Press any key to get started!";

document.onkeyup = function(event) {
    var userLetter = event.key

    wins.textContent = "Wins: " + wins;
    // guessing.textContent = 

}
