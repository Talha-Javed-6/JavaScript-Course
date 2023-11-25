/*Write a program that takes input a number from user & state whether
the number is positive, negative or zero.*/
var enterNumber=Number(prompt("Enter Any Number:"));
if (enterNumber>0) {
    document.write(enterNumber," is a Positive Number.");
}else if(enterNumber<0){
    document.write(enterNumber," is a Negative Number.");
}else if(enterNumber===0){
    document.write(enterNumber," is Zero.");
}