var event1=document.getElementById("button");

event1.addEventListener('click', myfrist,false)

function myfrist()
{
    
var number = parseInt(document.getElementById("input1").value);
    
    if(number < 0)
        {
         document.getElementById("demo").innerHTML = "Negative Number";
        }
    else if(number < 10)
        {
          document.getElementById("demo").innerHTML="Number is less than 10.";
        }
    else if(number === 10)
        {
          document.getElementById("demo").innerHTML="Number is 10.";

        }
    else 
        {
          document.getElementById("demo").innerHTML="Number is greater than 10.";
        }
}