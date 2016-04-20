//Event listener
var SearchEvent = document.getElementById("button1");
SearchEvent.addEventListener('click',Search,false);


// Creating an array of country
var CountryArray=["ENGLAND","FRANCE","ITALY","MEXICO","POLAND","RUSSIA","CHINA","GREECE","EGYPT","INDIA"];

 
function Search()
{
    
 
   // Getting the userinput in variable 
    var UserCountry1 = document.getElementById("UserChoice").value;
    
    // converting userinput to all capital
    var UserCountry2 = UserCountry1.toUpperCase();    
    
    // Using Index of to find the country index and if its present or not.
    var indexofelement = CountryArray.indexOf(UserCountry2);
    
    // Displaying if the country is present or not.
    if(indexofelement === -1)
        {
            document.getElementById("SearchResult").innerHTML = "The Country "+ UserCountry1 +" is not present in the Array."
        }
    else
        {
            document.getElementById("SearchResult").innerHTML = "The Country "+ CountryArray[indexofelement] +" is present in the Array." + "<br>"+ "The Country "+ CountryArray[indexofelement] +" is at the position " + (indexofelement+1)  +" in the Array." + "<br>";
        }
 
} //End of function
