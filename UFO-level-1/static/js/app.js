// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");

button.on("click", function () {
    tbody.html("");

    //Date code
    var inputDate = d3.select("#datetime");
    var inputValueDate = inputDate.property("value");

    var filteredDate = tableData.filter(tableData => tableData.datetime === inputValueDate);

    tbody = d3.select("tbody");

    filteredDate.forEach(function (UFOReport) {
        var row = tbody.append("tr");
        Object.entries(UFOReport).forEach(function ([key, value]) {
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
    //City code
    var inputCity = d3.select("#city");
    var inputValueCity = inputCity.property("value");

    var filteredCity = tableData.filter(tableData => tableData.city === inputValueCity);

    tbody = d3.select("tbody");

    filteredCity.forEach(function (UFOReport) {
        var row = tbody.append("tr");
        Object.entries(UFOReport).forEach(function ([key, value]) {
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
    });

    //State code
    var inputState = d3.select("#state");
    var inputValueState = inputState.property("value");

    var filteredState = tableData.filter(tableData => tableData.state === inputValueState);

    tbody = d3.select("tbody");

    filteredState.forEach(function (UFOReport) {
        var row = tbody.append("tr");
        Object.entries(UFOReport).forEach(function ([key, value]) {
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
    });

    //Country code
    var inputCountry = d3.select("#country");
    var inputValueCountry = inputCountry.property("value");

    var filteredCountry = tableData.filter(tableData => tableData.country === inputValueCountry);

    tbody = d3.select("tbody");

    filteredCountry.forEach(function (UFOReport) {
        var row = tbody.append("tr");
        Object.entries(UFOReport).forEach(function ([key, value]) {
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
    });

    //Shape code
    var inputShape = d3.select("#shape");
    var inputValueShape = inputShape.property("value");

    var filteredShape = tableData.filter(tableData => tableData.shape === inputValueShape);

    tbody = d3.select("tbody");

    filteredShape.forEach(function (UFOReport) {
        var row = tbody.append("tr");
        Object.entries(UFOReport).forEach(function ([key, value]) {
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
    });

});