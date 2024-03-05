
//Q18) Write a program to check whether a number is even or odd

var num=Number(window.prompt("please enter any number : "));
switch(num){
    case num:
        if(num%2==0){
            document.write("this number is even : " + num);
        }
        else {
            document.write("this number is odd : " +num );
        }
        break;
}