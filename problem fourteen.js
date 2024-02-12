//Q14) Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade

var subjectPhysics=Number(window.prompt("plesae enter grade of Physics"));
var subjectChemistry=Number(window.prompt("plesae enter grade of Chemistry"));
var subjectBiology=Number(window.prompt("plesae enter grade of Biology"));
var subjectMathematics=Number(window.prompt("plesae enter grade of Mathematics"));
var subjectComputer=Number(window.prompt("plesae enter grade of Computer"));
var Percentage=(((subjectPhysics+subjectChemistry+subjectBiology+subjectMathematics+subjectComputer)/5)/(100)*(100));
if(Percentage>=90){
    document.write("Grad A");
}
else if (Percentage<90 && Percentage>=80){
    document.write("Grad B")
}
else if (Percentage<80 && Percentage>=70){
    document.write("Grad C")
}
else if (Percentage<70 && Percentage>=60){
    document.write("Grad D")
}
else if (Percentage<60 && Percentage>=40){
    document.write("Grad E")
}
else{
    document.write("Grad F") 
}
