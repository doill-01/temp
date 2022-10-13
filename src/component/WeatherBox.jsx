import React from 'react'

const WeatherBox = ({weather}) => {
	console.log("weather",weather)
  return (
	<div className='weather-box'>
		<div>{weather?.name}</div>
		<h2>{Math.round(weather?.main.temp)}도</h2>
		<h3>{weather?.weather[0].description}</h3>
	</div>
  )
}

export default WeatherBox