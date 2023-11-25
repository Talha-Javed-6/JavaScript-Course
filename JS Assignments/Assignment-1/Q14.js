//Q-14:
var a=2;
var b=1;
var result=--a - --b + ++b + b--; //1-0+1+1
document.write("a is ",a,"<br>")
document.write("b is ",b,"<br>")
document.write("Result is ",result,"<br>")
//--a means now a=1
//--b means now b=0
//--a - --b means 1-0=1
//++b means now b=1
//--a - --b + ++b means 1-0+2=3
//b-- means after use of b=1 b becomes b=0