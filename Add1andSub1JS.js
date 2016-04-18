var event1 = document.getElementById("button");

event1.addEventListener('click', myfirst,false);

function myfirst()
{
    var number = parseInt(document.getElementById("userinput").value);
    
    var number1= number-1;
    var number2= number+1;
    
    document.getElementById("demo1").innerHTML=number1;
    document.getElementById("demo2").innerHTML=number2;
}