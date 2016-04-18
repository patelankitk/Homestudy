var event1 = document.getElementById("button");

event1.addEventListener('click', myfirst,false);

function myfirst()
{
    var a = parseInt(document.getElementById("userinput1").value);
    var b= parseInt(document.getElementById("userinput2").value);

    var c = parseInt(document.getElementById("userinput3").value);

    
    var number1= (a+b)*c;
    var number2= (a+b+c);
    var number3=number1-number2;
    
    document.getElementById("demo1").innerHTML=number1;
    document.getElementById("demo2").innerHTML=number2;
    document.getElementById("demo3").innerHTML=number3;

    
}