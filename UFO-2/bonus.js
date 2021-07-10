var tblData = data;
var tblColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
var tbody = d3.select("tbody");
var searchBtn = d3.select("#searchBtn");
var resetBtn = d3.select("#btnReset");

var searchDate = d3.select("#searchDate");
var searchCity = d3.select("#searchCity");
var searchState = d3.select("#searchState");
var searchCountry = d3.select("#searchCountry");
var searchShape = d3.select("#searchShape");

var loadTableRows = (loadedData) => { 
    tbody.html("");
	loadedData.forEach(dataRow => { 
		var tblRow = tbody.append("tr");  

		tblColumns.forEach(column => tblRow.append("td").text(dataRow[column]))
	});
}

loadTableRows(tblData);
btnSearch.on("click", () => {
	d3.event.preventDefault();

    var dateResult = dateResult.property("value");
    var cityResult = cityResult.property("value");
    var stateReult = stateReult.property("value");
    var countryResult = countryResult.property("value");
    var shapeResult = shapeResult.property("value");
		
	if(dateResult){
		var tblData_Filtered = tblData.filter(tblData => tblData.datetime === dateResult);
		if(tblData_Filtered.length !== 0) {
			loadTableRows(tblData_Filtered);
		}
		else {
			tbody.html("");
			tbody.append("tr").append("td").text("Sorry! No sightings were found for this search");
		}
	}
	else if(cityResult) {
		var tblData_Filtered = tblData.filter(tblData => tblData.city === cityResult);
	
		if(tblData_Filtered.length !== 0) {
			loadTableRows(tblData_Filtered);
		}
		else {
			tbody.html("");
			tbody.append("tr").append("td").text("Sorry! No sightings were found for this search");
		}
	}
	else if(stateReult) {
		var tblData_Filtered = tblData.filter(tblData => tblData.state === stateReult);
	
		if(tblData_Filtered.length !== 0) {
			loadTableRows(tblData_Filtered);
		}
		else {
			tbody.html("");
			tbody.append("tr").append("td").text("Sorry! No sightings were found for this search");
		}
	}
	else if(countryResult) {
		var tblData_Filtered = tblData.filter(tblData => tblData.country === countryResult);
		if(tblData_Filtered.length !== 0) {
			loadTableRows(tblData_Filtered);
		}
		else {
			tbody.html("");
			tbody.append("tr").append("td").text("Sorry! No sightings were found for this search");
		}
	}
	else { 
		var tblData_Filtered = tblData.filter(tblData => tblData.shape === shapeResult);
		if(tblData_Filtered.length !== 0) {
			loadTableRows(tblData_Filtered);
		}
		else {
			tbody.html("");
			tbody.append("tr").append("td").text("Sorry! No sightings were found for this search");
		}
	}
})

btnReset.on("click", () => {;
	document.getElementById("dateResult").value='';
	document.getElementById("cityResult").value='';
	document.getElementById("stateResult").value='';
	document.getElementById("countryResult").value='';
	document.getElementById("shapeResult").value='';
	
	loadTableRows(tblData);
})