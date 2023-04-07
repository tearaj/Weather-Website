import getWeatherByCity from "./apiCalls.js";

const searchButton = document.querySelector("#search-btn")
const searchBar=document.getElementById("search-bar")
const toastContent=document.querySelector('.toast')
const toast=new bootstrap.Toast(toastContent)

async function search(event){
		event.preventDefault()
		const city = searchBar.value
		searchButton.innerHTML=`<span class="spinner-border spinner-border-sm" style="margin:0 17.3px" role="status" aria-hidden="true"></span>`
		const response = await getWeatherByCity(city)
		searchButton.innerHTML="Search"
		if(response.status>=400 && response.status<500){
			error("Invalid city name.<br/>Please enter a valid city name.")
			return
		}
		else if(response.status>=500){
			error("API is unreachable at the moment.<br/>Please try again later.")
			return
		}

		display(city, response.data)
}


function display(city, weather){
	const elementsToUpdate = document.querySelectorAll('.update-details')
	elementsToUpdate.forEach((element)=>{
		element.innerHTML = weather[element.id]
	})

	const cityEl = document.querySelector('#primary-location')
	cityEl.innerHTML = city.charAt(0).toUpperCase()+city.slice(1);	
}

function error(message){
	const closeBtn  = document.querySelector('.close-custom')
	const toastBody = document.querySelector('.toast-body')
	toast.show()
	toastBody.innerHTML = message
	closeBtn.addEventListener('click',()=>toast.hide())
	setTimeout(()=>toast.hide(),5000)
}

//add click event listener to buttons
searchButton.addEventListener("click",search)

//The below event listener makes sure that the button gets clicked when enter is pressed while in the search bar
searchBar.addEventListener("keypress",(event)=>{
	if(event.key=="Enter") {event.preventDefault; searchButton.click()}
})

const initialResponse = await getWeatherByCity("Chennai")
if(initialResponse.status==200) display("Chennai", initialResponse.data)
else error("API is unreachable at the moment.<br/>Please try again later.")
