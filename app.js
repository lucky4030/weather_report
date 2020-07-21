window.addEventListener('load' , ()=>{
	let long;
	let lat;
	let temperatureDescription = document.querySelector(
		".temperature-description");
	let temperatureDegree = document.querySelector(
		".temperature-degree");
	let weatherCondition = document.querySelector(
		".condition");

	let humidity = document.querySelector(
		".humid");
	let wind = document.querySelector(
		".windspeed");

	let locationTimezone = document.querySelector(".location-timezone");
	if( navigator.geolocation){
		navigator.geolocation.getCurrentPosition( position =>{
			long = position.coords.longitude;
			lat = position.coords.latitude;
			const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=0c50f6c66c44fcd4b19f6bc619c6202f`;
			fetch(api)
				.then(response =>{
					return response.json();
				})
				.then(data =>{
					//console.log(data);
					// document.getElementbyclassname("temperature-degree").innerhtml=data.main.temp;
					// document.getElementbyclassname("temperature-description").innerhtml=data.weather[0].description;
					// document.getElementbyclassname("location-timezone").innerhtml=data.name;
					
					humidity.textContent=data.main.humidity;
					wind.textContent=data.wind.speed;
					temperatureDegree.textContent = data.main.temp;
					temperatureDescription.textContent = data.weather[0].description;
					locationTimezone.textContent = data.name;
					weatherCondition.textContent = data.visibility;
					
				});
		});
	}

});