

document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  
  const value = document.getElementById("weatherInput").value;
  
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=dc5d0a7d2b0d768c735d9afabc021a55";
/*global fetch*/
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      
      
       if (value === "")
    return;
  let results = "";
  /*global json*/
      results += '<h2>Weather in ' + json.name + "</h2>";
      for (let i=0; i < json.weather.length; i++) {
	results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }
      results += '<h2>' + json.main.temp + " &deg;F</h2>"
      results += "<p>"
      for (let i=0; i < json.weather.length; i++) {
	results += json.weather[i].description
	if (i !== json.weather.length - 1)
	  results += ", "
      }
      results += "</p>";
      document.getElementById("weatherResults").innerHTML = results;
      console.log(json);
      
    });
    
    
    const url2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=dc5d0a7d2b0d768c735d9afabc021a55";
  fetch(url2)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
            let forecast = "";
             console.log(json);
      for (let i=0; i < json.list.length; i++) {
        
	forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
	forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
	forecast += '<img src="https://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
      }
      document.getElementById("forecastResults").innerHTML = forecast;
    });
      
 
    });

/*global value*/


