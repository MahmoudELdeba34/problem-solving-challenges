// Q12)Write a program to enter marks of five subjects and calculate total, average and percentage.

var subjectOne=Number(window.prompt("please enter your subject one :"));
var subjectTwo=Number(window.prompt("please enter your subject Two :"));
var subjectThree=Number(window.prompt("please enter your subject Three :"));
var subjectFour=Number(window.prompt("please enter your subject Four :"));
var subjectFive=Number(window.prompt("please enter your subject Five :"));
var totalSubject=subjectOne+subjectTwo+subjectThree+subjectFour+subjectFive;
var average=(subjectOne+subjectTwo+subjectThree+subjectFour+subjectFive)/5;
var percentage=((average)/100)*100;
document.write("Total = "+totalSubject + "</br>");
document.write("average = " + average + "</br>");
document.write("percentage = " + percentage + "%"+"</br>");


