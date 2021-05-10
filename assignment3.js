var userType = 3; 
//1 for validator, 2 for miner and other for normal users
var firstName = "Rolf";
var lastName = "Dobelli";
if (userType == 1){
    console.log("Thank you"+" "+ firstName+" "+lastName+" for your validation");
}
else if (userType == 2)
{
    console.log("Thank you"+" "+ firstName+" "+lastName+" for keeping the network secure");;
}
else {
    console.log("Thank you"+" "+ firstName+" "+lastName+" for using the platform");;
}
