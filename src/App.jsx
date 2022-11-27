
import './App.css'
import WeatherCard from './assets/components/card_clima/WeatherCard'
import './assets/components/card_clima/WeatherCard.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from './assets/components/loading/Loading'
import './assets/components/loading/Loading.css'

function App() {

	const [coords, setCoords] = useState()
	const [weather, setWeather] = useState()
	const [temp, setTemp] = useState()

	const current = (pos) => {
		setCoords({
			lon: pos.coords.longitude,
			lat: pos.coords.latitude
		})
	}
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(current)
	}, [])
	
	useEffect(()=> {
		const apiKey = 'ae8494f0620a6857909ecc3bb55b9e39'
		if (coords) {
			axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords?.lat}&lon=${coords?.lon}&appid=${apiKey}`)
				.then((res) =>{
					setWeather(res.data)
					const celsius = (res.data.main.temp - 32 * (5/9)).toFixed(1)
					const fahrenheit = (celsius * (9/5) + 32).toFixed(1)
					setTemp({fahrenheit,celsius})
				})
				.catch((err) => console.log(err))
		}
	},[coords])

	return (
		<div className="App">
			{
				weather?
					<WeatherCard 
						weather = {weather}
						temp = {temp}
					/>
				:
					<Loading/>
			} 
    		
		</div>
	)
}

export default App
