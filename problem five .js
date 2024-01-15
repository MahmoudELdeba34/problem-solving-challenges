//Q3) 5- Write a program that take 3 integers from user then print the max element and the min element.

var numOne=parseInt(window.prompt("please enter number one "));
var numTwo=parseInt(window.prompt("please enter number Two "));
var numThree=parseInt(window.prompt("please enter number Three "));
var maxNumber,minNumber;
//chick max
if((numOne>numTwo)&&(numOne>numThree)){
    maxNumber=numOne;
}
else if((numTwo>numOne)&&(numTwo>numThree)){
    maxNumber=numTwo;
}
else{
   maxNumber=numThree;
}
//chick min 
if((numOne<numTwo)&&(numOne<numThree)){
    minNumber=numOne;
}
else if((numTwo<numOne)&&(numTwo<numThree)){
    minNumber=numTwo;
}
else{
   minNumber=numThree;
}
document.write("max number is :"+maxNumber +"</br>");
document.write("min number is :"+minNumber);
