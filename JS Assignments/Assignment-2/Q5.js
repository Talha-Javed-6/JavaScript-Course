//Guess Game
var secretNumber=6;
var guessedNumber=Number(prompt("Guess the Secret Number(1-10):"));
if (guessedNumber===secretNumber) {
    document.write("Bingo! Correct Answer");
}
if (guessedNumber+1===secretNumber) {
    document.write("Close Enough to the Correct Answer");
}else if (guessedNumber!==secretNumber) {
    document.write("Ohhhh!!!! You Lose");
}