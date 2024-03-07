//Q19) Write a program to check whether a number is positive or negative or zero

var num=Number(window.prompt("please enter any number : "));
switch(num){
    case num:
        if(num>0){
            document.write("this number is positive : " + num);
        }else if(num<0){
            document.write("this number is negative : " + num );
        }else if(num==0){
            document.write("this number is Zero : " + num ) ;
        }else{
            document.write("this is not number please enter number and agin .")
        }
}
