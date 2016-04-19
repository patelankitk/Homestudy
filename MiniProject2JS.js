

    function interestcal()
    {
   
        var amount =parseInt(document.getElementById("amount").value);
        var interest_rate =parseInt(document.getElementById("interest").value);  
        var interest = interest_rate / 100;
        var months =parseInt(document.getElementById("month").value);
        var year = (months/12).toFixed(2);
        
        
        var totalpayment = amount*(1+(interest * year));
        var monthlypayment = totalpayment/12;
        var totalinterestpayable = (amount*interest*year);
        document.getElementById('payment').innerHTML = "Monthly Payment = "+monthlypayment+"<br>"+ "Total Payment = "+totalpayment+"<br>"+"Total Interest Payable = "+totalinterestpayable;
    }



