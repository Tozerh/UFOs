// imports the data from data.js
const tableData = data;

// references the HTML table using D3
var tbody = d3.select("tbody");

// clears out existing data in table. 
function buildTable(data) {
    tbody.html(""); 


}; 

// loops through each object of data and append a row 
// and cells for each value in a given row
data.forEach((dataRow) => {

let row = tbody.append("tr"); //using let so that the var row is not available outside of the forEach fnc

// loops through each field in dataRow and adds each value as a table cell "(td)"
Object.values(dataRow).forEach((val) => {
    let cell = row.append("td"); 
    cell.text(val)
    }
    ); 
});