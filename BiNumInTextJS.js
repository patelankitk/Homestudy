var event1=document.getElementById("button");

event1.addEventListener('click',compare,false);

function compare()
{
    var firstinput = parseInt(document.getElementById("input1").value);
    var secondinput = parseInt(document.getElementById("input2").value);
    
    if(firstinput === secondinput)
        {
            document.getElementById("demo").innerHTML = "Both are same"
        }
    else
        {
            document.getElementById("demo").innerHTML="Both are different"
        }

}
