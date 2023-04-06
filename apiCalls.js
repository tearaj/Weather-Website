//this file will have functions to call the api
import { API_KEY } from "./apiKey.js";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

export default async function getWeatherByCity(city){
	try {
		let res = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
		console.log("API responded data")
        console.log(res)
		return {
            data: await res.json(),
            status: res.status
        }
	} catch (error) {
		console.log("API call failed. Reason: ",error )
	}
}
