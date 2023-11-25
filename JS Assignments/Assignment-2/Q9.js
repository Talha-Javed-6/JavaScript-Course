/* Write a program that takes a character (i.e. string of length 1) and
returns true if it is a vowel, false otherwise*/
var character=prompt("Enter a Character:");
if (character=="A"||character=="a"||
    character=="E"||character=="e"||
    character=="I"||character=="i"||
    character=="O"||character=="o"||
    character=="U"||character=="u") {
    document.write(true);
}else{
    document.write(false);
}