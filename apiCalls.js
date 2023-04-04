//this file will have functions to call the api
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2c58d12bbbmsh11650f1d3a8aa42p179241jsn79fa83420ad7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

export default async function getWeatherByCity(city){
	try {
		let res = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
		console.log("API responded data")
		return res.json()
	} catch (error) {
		console.log("API call failed. Reason: ",error )
	}
}




// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));