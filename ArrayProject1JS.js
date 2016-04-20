// Creating an array of country

var CountryArray=["ENGLAND","FRANCE","ITALY","MEXICO","POLAND","RUSSIA","CHINA","GREECE","EGYPT","INDIA"];


var UserCountry = parseInt(document.getElementById("UserChoice").value);

var SearchEvent = document.getElementById("SearchCountry");
SearchEvent=addEventListener('click',Search,false);
 

function Search()
{
    //alert("Hello");
    //var UserCountry = document.getElementById("UserChoice").value;
    var i;
    for (i=0;i<CountryArray.length;i++)
        {
            if(CountryArray[i]===UserCountry)
                {
                    document.getElementById("SearchResult") = "The Country "+ UserCountry +"is present in the Array." + "<br>"+ "The Country "+ UserCountry +"is at the position " +(i+1)  +"in the Array." + "<br>";
                }
        }
}