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
		event.preventDefault()
		const city = searchBar.value
		searchButton.innerHTML=`<span class="spinner-border spinner-border-sm" style="margin:0 17.3px" role="status" aria-hidden="true"></span>`
		console.log(searchButton.innerHTML)
		const weather = await getWeatherByCity(city)
		searchButton.innerHTML="Search"
		// logger(city, weather)
		display(city, weather)
}


function display(city, weather){
	const elementsToUpdate = document.querySelectorAll('.update-details')
	elementsToUpdate.forEach((element)=>{
		element.innerHTML = weather[element.id]
	})
	
	const cityEl = document.querySelector('#primary-location')
	cityEl.innerHTML = city.charAt(0).toUpperCase()+city.slice(1);	
}

function logger(city, weather){
	const elementsToUpdate = document.querySelectorAll('.update-details')
	console.log("ELEMENTS ARE: \n",elementsToUpdate)
	const elementsArr=Array.from(elementsToUpdate)
	console.log("ARRAY IS: ", elementsArr)
	elementsArr.forEach((el)=>{
		const elData = weather[el.id]
		console.log(el.id)
		console.log(el.innerHTML)
		console.log("New element data ", elData)
		el.innerHTML = weather[el.id]
	})
}
//add click event listener to buttons
searchButton.addEventListener("click",search)

//The below event listener makes sure that the button gets clicked when enter is pressed while in the search bar
searchBar.addEventListener("keypress",(event)=>{
	if(event.key=="Enter") {event.preventDefault; searchButton.click()}
})

display("Chennai", await getWeatherByCity("Chennai"))
