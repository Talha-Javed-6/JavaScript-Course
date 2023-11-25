var password="St742426";
var passwordUser=prompt("Enter Your Password:");
if (passwordUser) {
    if(passwordUser==password){
    alert("Correct! password you entered matches the original password");
    }else{
    alert("Wrong Password");
    }
}else{
    alert("Please Enter Your Password..");
}