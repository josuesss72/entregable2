import React from 'react'
import { useState } from 'react'

const WeatherCard = ({weather, temp}) => {
    
    const iconWheather = weather?.weather[0].icon
    const pressure = weather?.main.pressure
    const windSpeed = weather?.wind.speed
    const clouds = weather?.clouds.all
    const humidity = weather?.main.humidity

    const [isCelsius, setIsCelsius] = useState(true)
    const handleClick = () => setIsCelsius(!isCelsius) 

    return (
        <div className='WeatherCard'>
            <header className='header_weather'>
                <h2><i className='bx bx-cloud icon_cloud'></i> Weather App</h2>
                <h3>{weather?.name} {weather?.sys.country}</h3>
            </header>
            <main className='infoWeather'>
                <section className='section_icon'>
                    <img src={weather && `http://openweathermap.org/img/wn/${iconWheather}@4x.png`} alt="" />
                    <h4><i className='bx bxs-thermometer incon_temp'></i><b>{isCelsius ? `${temp?.celsius} ºC`: `${temp?.fahrenheit} ºF`}</b></h4>
                </section>
                <section className='section_clouds'>
                    <h2>Scattered clouds</h2>
                    <ul>
                        <li><i className='bx bx-wind incon_info' ></i><b>Wind Speed:</b> {windSpeed} m/s</li>
                        <li><i className='bx bx-cloud incon_info' ></i><b>Clouds:</b> {clouds} %</li>
                        <li><i className='bx bxs-vial incon_info'></i><b>Pressure:</b> {pressure} mb</li>
                        <li><i className='bx bxs-shower incon_info' ></i><b>Humidity:</b> {humidity} %</li>
                    </ul>
                </section>
            </main>
            <footer>
                <button onClick={handleClick} className='btn_temp'>Degrees F/C</button>
            </footer>
        </div>
    )
}

export default WeatherCard