//Event Listner for the Click Even button//

var event1 = document.getElementById("button1");
event1.addEventListener('click', list, false);

// Event Listner for Generating Winner //

var event2 = document.getElementById("button2");
event2.addEventListener('click', winner, false);


// Creating an Empty Array //
var Names = [];


// Function to create the list in array and add new items.
function list ()
{
        var namelist = document.getElementById("UserInput").value;
        Names.push(namelist);
          
    var text = "<ul>";
    
   // Displayig the list to user
    for(i=0; i<Names.length; i++)
        {
            text = text + "<li>" + Names[i] + "</li>";  
        }
          text = text + "</ul>";
         document.getElementById("List").innerHTML = text;  
}


// Generating the winner using following function.
function winner()
{
    var winner1 = Math.floor(Math.random() * Names.length);
    document.getElementById("winner").innerHTML ="The Winner is " +Names[winner1];
}

    