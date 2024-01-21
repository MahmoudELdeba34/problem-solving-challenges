//Q10) Write aprogram that allows to user to insert number then print all even numbers between 1 to this number

var num=parseInt(window.prompt("please enter any number :"));
for(i=1;i<=num;i++){
    if(i%2==0){
        document.write("even number : "+i+"</br>");
    }
}
