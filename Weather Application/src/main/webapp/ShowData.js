var weatherData = {};

var search_icon = document.getElementById("search");
search_icon.addEventListener("click", showData);

var apikey = "ad81ce72630b80e5edace06383b740a5";
var url = "https://api.openweathermap.org/data/2.5/weather?q=";

var condition = document.getElementById("condition");
var temperature = document.getElementById("temperature");
var place = document.getElementById("place");
var description = document.getElementById("description");

function showData() {
	var location = document.getElementById("location").value;
	if (location != "") {
		url = url + location + "&appid=" + apikey;

		fetchData(url).then((data) => {
			weather = data;
			console.log(weather);
			condition.innerHTML = `<img src="images/${weather.weather[0].icon}.png"/>`;
			temperature.innerHTML = weather.main.temp;
			place.innerHTML = weather.name + ', ' + weather.sys.country;
			description.innerHTML = weather.weather[0].description;
			description.style.color = "black";
		}).catch((error) => {
			condition.innerHTML = `<img src="images/unknown.png"/>`;
			temperature.innerHTML = "";
			place.innerHTML = "";
			description.innerHTML = "*place is Not Mentioned";
			description.style.color = "red";
		});

	} else {
		temperature.innerHTML = "";
		place.innerHTML = "";
		description.innerHTML = "*place Not Selceted";
		description.style.color = "red";
	}
}

async function fetchData(url) {
	try {
		var response = await fetch(url);
		var data = await response.json();
		return data;
	} catch (error) {

	}
}