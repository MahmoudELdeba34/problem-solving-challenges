// Q3) 3- Write a program that allows the user to insert 2 integers then print the max

var numOne=Number(window.prompt("Please Enter Number one"));
var numTwo=Number(window.prompt("Please Enter Number Two"));
if(numOne>numTwo){
    document.write("number one is max :"+ numOne);
}
else if(numTwo>numOne){
    document.write("number two is max : " + numTwo);
}
else{
    document.write("enter number agin");
}