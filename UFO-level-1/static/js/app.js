// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");

button.on("click", function () {
    tbody.html("");
    var input = d3.select("#datetime");
    var inputValue = input.property("value");

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    tbody = d3.select("tbody");

    filteredData.forEach(function (UFOReport) {
        var row = tbody.append("tr");
        Object.entries(UFOReport).forEach(function ([key, value]) {
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
    });

});