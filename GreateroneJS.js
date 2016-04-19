var event1=document.getElementById("button");

event1.addEventListener('click', myfrist,false)

function myfrist()
{
  
    
var a = parseInt(document.getElementById("input1").value);
var b= parseInt(document.getElementById("input2").value);
    
    if(a>10 || b>10)
        {
         document.getElementById("demo").innerHTML = "one of them or both are greater then 10";
        }
    else
        {
         document.getElementById("demo").innerHTML = "both are less then 10";

        }
    
    
}