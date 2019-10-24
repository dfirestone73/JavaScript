// from data.js
var tableData = data;

// YOUR CODE HERE!
var table = d3.select("#ufo-table");
var button = d3.select("#filter-brn");



button.on("click", function () {
    var input = d3.select("#datetime");
    var inputValue = input.property("value");

    var filteredData = tableData.filter(dates => dates.datetime === inputValue);

    tableData.forEach(function (UFOReport) {
        var row = table.append("tr");
        Object.entries(UFOReport).forEach(function ([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    })

});