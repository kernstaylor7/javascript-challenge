var dataTable=data;
console.log(dataTable)

var tbody = d3.select('tbody');
console.log(data);
data.forEach(function(ufo) {
    console.log(ufo)
});

data.forEach(function(ufo) {
  console.log(ufo);
    var row = tbody.append('tr');
    Object.entries(ufo).forEach(function([key, value]){
      console.log(key, value);
      var cell = tbody.append('td');
      cell.text(value);
    });
});

var button=d3.select('#filter-btn');

button.on('click', function(event){
  d3.event.preventDefault();
  tbody.html('');

  var inputElement =d3.select('#datetime');
  var inputValue=inputElement.property('value');
  var filterData= dataTable.filter(dataTable=>dataTable.datetime ===inputValue);
  filterData.forEach(function(dateData){
    var row=tbody.append('td');
    Object.entries(dateData.forEach(function([key,value]){
      var cell=tbody.append('td');
      cell.text(value);
    }));
  });
});

data.forEach(function(ufo) {
    var row = tbody.append('tr');
    Object.entries(ufo).forEach(function([key, value]) {
        console.log(key, value);
    });

});

