// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");


function createtable(tdata) {


//clear out existing data from table
tbody.html("")

//Loop through table
tdata.forEach((sighting) => {
    var tablerow = tbody.append("tr");
    Object.values(sighting).forEach((value) => {
      var cell = tablerow.append("td");
      cell.text(value);
    });
  });
}
function clickhandler()
{

    //Stop autorefresh
d3.event.preventDefault(); 

var sightingdate = d3.select("#datetime").property("value");
   
   //Set mini variable equal to sightdate
let filteredtable = tableData

   //Filter using sightdate
    if (sightingdate)
    {
       filteredtable = filteredtable.filter(sightingrow => sightingrow.datetime === sightingdate);
    }
   

   //Rebuild table
createtable(filteredtable);

}

//Attach event to listen from d3
d3.selectAll("#filter-btn").on("click", clickhandler);

//Bulid table
createtable(tableData);