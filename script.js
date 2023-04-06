import getWeatherByCity from "./apiCalls.js";

const searchButton = document.querySelector("#search-btn")
const searchBar=document.getElementById("search-bar")

async function search(event){
		event.preventDefault()
		const city = searchBar.value
		searchButton.innerHTML=`<span class="spinner-border spinner-border-sm" style="margin:0 17.3px" role="status" aria-hidden="true"></span>`
		console.log(searchButton.innerHTML)
		const weather = await getWeatherByCity(city)
		searchButton.innerHTML="Search"
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


//add click event listener to buttons
searchButton.addEventListener("click",search)

//The below event listener makes sure that the button gets clicked when enter is pressed while in the search bar
searchBar.addEventListener("keypress",(event)=>{
	if(event.key=="Enter") {event.preventDefault; searchButton.click()}
})

display("Chennai", await getWeatherByCity("Chennai"))
