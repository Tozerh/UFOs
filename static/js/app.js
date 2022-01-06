// imports the data from data.js
const tableData = data;

// references the HTML table using D3
var tbody = d3.select("tbody");

// clears out existing data in table. 
function buildTable(data) {
    tbody.html(""); 


// loops through each object of data and append a row 
// and cells for each value in a given row
data.forEach((dataRow) => {

    let row = tbody.append("tr"); //using let so that the var row is not available outside of the forEach fnc

// loops through each field in dataRow and adds each value as a table cell "(td)"
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td"); 
        cell.text(val);
        }
    ); 
});
}
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData; 
// pseudocode practice: "if (a date is entered) {Filter the 
// default data to show only the date entered};""


// "===" = exact match for value and type
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
// redbuilds table with the filteredData -- if no date entered, then filteredData 
// will be the original tableData
    buildTable(filteredData);
};

// listens for "click"; when button is clicked, triggers on, which runs func. handleClick
d3.selectAll("#filter-btn").on("click", handleClick);

// creates basic table filled with unfiltered data from our data array, "data.js"
buildTable(tableData);