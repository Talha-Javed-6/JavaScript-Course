var time=Number(prompt("Enter time in 24 hours clock format (like: 1900 = 7pm):"));
if(time>=0o0 && time<1200){
    //12:00am-12:00pm
    alert("Good Morning");
}else if(time>=1200 && time<1700){
    //12:00pm-5:00pm
    alert("Good Afternoon");
}else if(time>=1700 && time<2100){
    //5:00pm-9:00pm
    alert("Good Evening");
}else if(time>=2100 && time<2359){
    //9:00pm-11:59pm
    alert("Good Night");
}