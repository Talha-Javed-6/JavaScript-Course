/*Q-1:Write a program to take “city” name as input from user. If user enters
“Karachi”, welcome the user like this: “Welcome to city of lights”*/
var enterCity=prompt("Enter the City Name:");
if (enterCity=="Karachi"||enterCity=="karachi") {
    document.write("Welcome to the City of Lights");
}
else if (enterCity=="Lahore"||enterCity=="lahore") {
    document.write("Welcome to the Heart of Pakistan");
}
else if (enterCity=="Faisalabad"||enterCity=="faisalabad") {
    document.write("Welcome to the Manchester of Pakistan");
}
else if (enterCity=="Multan"||enterCity=="multan") {
    document.write("Welcome to the City of Pirs and Shrines");
}
else if (enterCity=="Islamabad"||enterCity=="islamabad") {
    document.write("Welcome to the City of Peace");
}
else{
    document.write("You entered a city that is not in this Program.")
}
