//Write a program to create a calculator for +,-,*, / & %
var num1=Number(prompt("Enter 1st Number:"));
var num2=Number(prompt("Enter 2nd Number:"));
var operation=prompt("Enter any Operation you want to perform(+,-,*,/,%):");
document.write("num1="+num1+"<br>");
document.write("num2="+num2+"<br>");
document.write("Operation="+operation+"<br>");
if (operation=="+") {
    var addition=num1+num2;
    document.write("Sum is ",addition);
}else if (operation=="-") {
    var subtraction=num1-num2;
    document.write("Subtraction is ",subtraction);
}else if (operation=="*") {
    var Multiply=num1*num2;
    document.write("Multiplication is ",Multiply);
}else if (operation=="/") {
    var division=num1/num2;
    document.write("Division is ",division);
}else if (operation=="%") {
    var modulus=num1%num2;
    document.write("Modulus is ",modulus);
}else{
    document.write("You Entered a Wrong Operation.");
}