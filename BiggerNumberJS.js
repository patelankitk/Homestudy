var event1=document.getElementById("button");


event1.addEventListener('click',myfirst,false);


function myfirst()
{
    var firstinput =parseInt(document.getElementById("userinput1").value);
    var secondinput =parseInt(document.getElementById("userinput2").value);

    if(firstinput > secondinput)
        {
            document.getElementById("demo1").innerHTML = firstinput;
        }
    else
        {
            document.getElementById("demo1").innerHTML =secondinput;

        }

    
}

