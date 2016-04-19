var event1 = document.getElementById("button");

// invoking an even listener.
event1=addEventListener('click',interestcal,false);



    function interestcal()
    {
        var amount =parseInt(document.getElementById("amount").value);
        var interest =parseInt(document.getElementById("interest").value);        
        var duration =parseInt(document.getElementById("duration").value);
        var month= (duration*12);
        
        
   
        
	var interest = (amount * (interest * .01)) / month;
	var payment = ((x / month) + interest).toFixed(2);
	

        



    }



