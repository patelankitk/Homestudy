
 //Generating a Random number
var x = Math.floor((Math.random() * 100) + 1);
    
// Creating a variable for number of guess
var guess =0;

var event1 = document.getElementById("button");

// invoking an even listener.
event1=addEventListener('click',randomvalue,false);



    function randomvalue()
    {
        // storing the input from user in variable y.
        var y =parseInt(document.getElementById("userinput").value);
        
        // checking if userinput is high / low or equal to random number

            if (x < y)
                {
                    document.getElementById("demo").innerHTML="The number is too high."
                    var y = parseInt(document.getElementById("userinput").value);
                    guess++;
                    

                }
            else if (x > y)
                {
                    document.getElementById("demo").innerHTML="The number is too low."
                    var y = parseInt(document.getElementById("userinput").value);
                    guess++;
                    

                }
        
            else if(x===y)
                {
                    guess++;
                    document.getElementById("demo").innerHTML="Well Done you guess the correct number."+"<br>" + "The correct Number was " + x +".<br>"+ "Total No of Guess:- "+ guess;
                    guess=0;
                   
                    
                    
                }
           
    }
var event2 = document.getElementById("play");

        // invoking an even listener.
event2=addEventListener('click',play,false);
    function play()
    {
        reload(false)
               
    }



