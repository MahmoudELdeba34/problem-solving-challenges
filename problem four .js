//Q4) 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

var num=Number(window.prompt("please enter any number : "));
if(num>0){
document.write("this is positive number")
}
else if (num<0){
    document.write("this is negative number ");
}
else if(num==0){
    document.write("the numer if you enterd is zero");
}
else{
    document.write("erorr");
}
