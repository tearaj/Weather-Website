import getWeatherByCity from "./apiCalls.js";

const searchButton = document.querySelector("#search-btn")
const searchBar=document.getElementById("search-bar")
const wind_speed = document.getElementById("wind_speed")
const wind_degrees = document.getElementById("wind_degrees")
const temp = document.getElementById("temp")
const humidity = document.getElementById("humidity")
const min_temp = document.getElementById("min_temp")
const max_temp = document.getElementById("max_temp")
const feels_like = document.getElementById("feels_like")
const cloud_pct = document.getElementById("cloud_pct")

async function search(event){
		// console.log(event)
		const city = searchBar.value
		searchButton.innerHTML=`<span class="spinner-border spinner-border-sm" style="margin:0 17.3px" role="status" aria-hidden="true"></span>`
		console.log(searchButton.innerHTML)
		const weather = await getWeatherByCity(city)
		searchButton.innerHTML="Search"
		display(city, weather)
}


function display(city, weather){
	console.log("Called")
	const weatherEl = document.querySelector(".weather-details")
	console.log(weather)
	wind_speed.innerHTML=`${weather.wind_speed} km/h`
	wind_degrees.innerHTML=`${weather.wind_degrees}°`
	temp.innerHTML=`${weather.temp}°C`
	humidity.innerHTML=`${weather.humidity}%`
	min_temp.innerHTML=`${weather.min_temp}°C`
	max_temp.innerHTML=`${weather.max_temp}°C`
	feels_like.innerHTML=`${weather.feels_like}°C`
	cloud_pct.innerHTML=weather.cloud_pct
	const cityEl = document.querySelector('#primary-location')
	cityEl.innerHTML = city.charAt(0).toUpperCase()+city.slice(1);	
}

searchButton.addEventListener("click",search)
display("Chennai", await getWeatherByCity("Chennai"))
