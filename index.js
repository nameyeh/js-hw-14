// // Get references to the tbody element, input field and button
var tbody = document.querySelector("tbody");
var datetimeInput = document.querySelector("#date");
var searchBtn = document.querySelector("#search");

var cityInput = document.querySelector("#city");
var citySearchBtn = document.querySelector("#citysearch");

var stateInput = document.querySelector("#state");
var stateSearchBtn = document.querySelector("#statesearch");

var countryInput = document.querySelector("#country");
var countrySearchBtn = document.querySelector("#countrysearch");

var shapeInput = document.querySelector("#shape");
var shapeSearchBtn = document.querySelector("#shapesearch");


// // Add an event listener to the searchButton, call handleSearchButtonClick when clicked
searchBtn.addEventListener("click", handleSearchButtonClick);

citySearchBtn.addEventListener("click", handleCitySearchClick);

stateSearchBtn.addEventListener("click", handleStateSearchClick);

countrySearchBtn.addEventListener("click", handleCountrySearchClick);

shapeSearchBtn.addEventListener("click", handleShapeSearchClick);

// // Set filteredAddresses to addressData initially
var filteredDates = dataSet;
var filteredCities = dataSet;

var filteredState = dataSet;
var filteredCountry = dataSet;
var filteredShape = dataSet;




// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  tbody.innerHTML = "";
  for (var i = 0; i < filteredDates.length; i++) {
    // Get get the current sighting object and its fields
    var dates = filteredDates[i];
    var fields = Object.keys(dates);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var row = tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the data object, create a new cell at set its inner text to be the current value at the current sighting's field
      var field = fields[j];
      var cell = row.insertCell(j);
      cell.innerText = dates[field];
    }
  }
}


// renderTable renders the filteredAddresses to the tbody
function cityRenderTable() {
    tbody.innerHTML = "";
    for (var i = 0; i < filteredCities.length; i++) {
      // Get get the current sighting object and its fields
      var cities = filteredCities[i];
      var fields = Object.keys(cities);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var row = tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the data object, create a new cell at set its inner text to be the current value at the current sighting's field
        var field = fields[j];
        var cell = row.insertCell(j);
        cell.innerText = cities[field];
      }
    }
  }


  function stateRenderTable() {
    tbody.innerHTML = "";
    for (var i = 0; i < filteredState.length; i++) {
      // Get get the current data
      var states = filteredState[i];
      var fields = Object.keys(states);
      // Create a new row in the tbody, set the index to be i + starting Index
      var row = tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the object, create a new cell and set its inner text to be the current value 
        var field = fields[j];
        var cell = row.insertCell(j);
        cell.innerText = states[field];
      }
    }
}
function countryRenderTable() {
    tbody.innerHTML = "";
    for (var i = 0; i < filteredCountry.length; i++) {
      // Get get the current data
      var countries = filteredCountry[i];
      var fields = Object.keys(countries);
      // Create a new row in the tbody, set the index to be i + starting Index
      var row = tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the object, create a new cell and set its inner text to be the current value 
        var field = fields[j];
        var cell = row.insertCell(j);
        cell.innerText = countries[field];
      }
    }
}
function shapeRenderTable() {
    tbody.innerHTML = "";
    for (var i = 0; i < filteredShape.length; i++) {
      
      var shapes = filteredShape[i];
      var fields = Object.keys(shapes);
     
      var row = tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        
        var field = fields[j];
        var cell = row.insertCell(j);
        cell.innerText = shapes[field];
      }
    }
}


// handle click function for when user searches by date
function handleSearchButtonClick() {
    var filterDate = datetimeInput.value.trim();
    
  
    filteredDates = dataSet.filter(function(date) {
      var dateEntered = date.datetime;
  
      // If true, add the to the filtered table
      return dateEntered === filterDate;
    });
    renderTable();
}




// handle click function for when user searches by city
function handleCitySearchClick() {
    if(datetimeInput.value === "") {
        var filterCity = cityInput.value.trim().toLowerCase();
    
        filteredCities = dataSet.filter(function(city) {
        var cityEntered = city.city;

        return cityEntered === filterCity;
    });
    cityRenderTable();
    }

    else {
        var filterDate = datetimeInput.value.trim();
        var filterCity = cityInput.value.trim().toLowerCase();
        
        filteredCities = dataSet.filter(function(city) {
            var cityEntered = city.city;

            return cityEntered === filterCity;
        }),
       
        filteredDates = filteredCities.filter(function(date) {
        var dateEntered = date.datetime;
  
        // If true, add the to the filtered table
        return dateEntered === filterDate;

        }); 
        renderTable();
    }
}

function handleStateSearchClick() {
    var filterState = stateInput.value.trim();
        
    filteredState = dataSet.filter(function(state) {
    var stateEntered = state.state;

    return stateEntered === filterState;
    });
    stateRenderTable();
}

function handleCountrySearchClick() {
    var filterCountry = countryInput.value.trim();
        
    filteredCountry = dataSet.filter(function(country) {
    var countryEntered = country.country;

    return countryEntered === filterCountry
    });
    countryRenderTable();
}

function handleShapeSearchClick() {
    var filterShape = shapeInput.value.trim();
        
    filteredShape = dataSet.filter(function(shape) {
    var shapeEntered = shape.shape;

    return shapeEntered === filterShape
    });
    shapeRenderTable();
}


// Render the table for the first time on page load
renderTable(); 
