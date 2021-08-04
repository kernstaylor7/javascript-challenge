var tableDt = data;
console.log(tableDt);

var tbody = d3.select("tbody");
tableDt.forEach(function(ufoSightings) {
    console.log(ufoSightings);

    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(function([key, value]) {
      console.log(key, value);

      var cell = row.append("td");
      cell.text(value);
    });
  });

var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredDt = tableDt.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredDt);


    filteredDt.forEach(function(selections) {
    console.log(selections);

    var row = tbody.append("tr");
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
});
