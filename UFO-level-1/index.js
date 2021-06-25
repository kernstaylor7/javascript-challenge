var tbody = d3.select('tbody');
console.log(data);
data.forEach(function(ufo) {
    console.log(ufo)
});

data.forEach(function(ufo) {
    var row = tbody.append('tr');
});

data.forEach(function(ufo) {
    var row = tbody.append('tr');
    Object.entries(ufo).forEach(function([key, value]) {
        console.log(key, value);
    });

});

data.forEach(function(ufo) {    
    console.log(ufo);
    var row = tbody.append("tr");
  
    Object.entries(ufo).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
    });
  });
  data.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
   });
   