
/*Q-12:Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to
convert the total currency to Pakistani Rupees. Perform all
calculations in a single expression. (Exchange rates : 1 US Dollar =
155 Pakistani Rupee and 1 Saudi Riyal = 41 Pakistani Rupee)
*/

var dollarUs=10;
 var saudiRiyal=25;
var pakistaniRs=(dollarUs*155)+(saudiRiyal*41);
document.write("<h1>Currency in PKR</h1><br><br><br>");
document.write("Total Currency in PKR:",pakistaniRs);
