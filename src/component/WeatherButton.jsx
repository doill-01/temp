import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,setCity}) => {
	console.log("cities",cities)
	


  return (
	<div>
<Button variant="warning">νμμΉ</Button>
{cities.map((item,index)=>(
	<Button variant="warning" key={index} onClick={()=>setCity(item)}>{item}
	</Button>
))}
	</div>
  )
}

export default WeatherButton