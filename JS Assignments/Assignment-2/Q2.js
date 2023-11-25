/*Write a program to take input color of road traffic signal from the user
& show the order according to it*/
var signalColor=prompt("Enter the Color of Road Traffic Signal:");
if (signalColor=="Red"||signalColor=="red") {
    document.write("Must Stop");
}
else if (signalColor=="Yellow"||signalColor=="yellow") {
    document.write("Ready to Move");
}
else if (signalColor=="Green"||signalColor=="green") {
    document.write("Move Now");
}
else{
    document.write("This is not the color of a Traffic Signal.")
}
