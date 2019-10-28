// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");

tableData.forEach(function (UFOs) {
    var row = tbody.append("tr");
    Object.entries(UFOs).forEach(function ([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

button.on("click", function () {
    tbody.html("");
    var filteredData = tableData;

    //Date code
    var inputDate = d3.select("#datetime");
    var inputValueDate = inputDate.property("value");
    if (inputValueDate) {
        filteredData = filteredData.filter(tableData => tableData.datetime === inputValueDate)
    };

    //City code
    var inputCity = d3.select("#city");
    var inputValueCity = inputCity.property("value");
    if (inputValueCity) {
        filteredData = filteredData.filter(tableData => tableData.city === inputValueCity)
    };
 
     //State code
    var inputState = d3.select("#state");
    var inputValueState = inputState.property("value");
    if (inputValueState) {
        filteredData = filteredData.filter(tableData => tableData.state === inputValueState)
    };
 
    //Country code
    var inputCountry = d3.select("#country");
    var inputValueCountry = inputCountry.property("value");
    if (inputValueCountry) {
        filteredData = filteredData.filter(tableData => tableData.country === inputValueCountry)
    };

    //Shape code
    var inputShape = d3.select("#shape");
    var inputValueShape = inputShape.property("value");
    if (inputValueShape) {
        filteredData = filteredData.filter(tableData => tableData.shape === inputValueShape)
    };

    filteredData.forEach(function (UFOReport) {
        var row = tbody.append("tr");
        Object.entries(UFOReport).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });

});