var markMath=prompt("Enter your Marks in Math:");

var markChemistry=prompt("Enter your Marks in Chemistry:");

var markPhysics=prompt("Enter your Marks in Physics:");

var totalMarks=prompt("Enter Total Marks of these Subjects:");

var obtainedMarks=Number(markMath)+Number(markPhysics)+Number(markChemistry);

var percentage=(obtainedMarks*100)/Number(totalMarks);

var grade="";
var remarks="";
if (percentage>=80) {
    grade="A+";
    remarks="Excellent";
}else if(percentage>=70){
    grade="A";
    remarks="Good";
}else if(percentage>=60){
    grade="B";
    remarks="You need to Improve";
}
else if(percentage<60){
    grade="Fail";
    remarks="Sorry";
}
document.write("<h1>Marks Sheet</h1><br><br>");
document.write("Total Marks:",totalMarks,"<br>");
document.write("Marks Obtained:",obtainedMarks,"<br>");
document.write("Percentage:",percentage,"%<br>");
document.write("Grade:",grade,"<br>");
document.write("Remarks:",remarks,"<br>");