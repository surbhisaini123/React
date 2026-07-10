import React, { useState } from 'react'
import './SearchBox.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const SearchBox = () => {
   
    let [city,setCity]=useState("")
  const API_URL="https://api.openweathermap.org/data/2.5/weather"
  const API_KEY="e399e3288771f55367522e9e99a77a59"

  let getWeatherInfo= async()=>{
   let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
  //  console.log(response);
   let jsonResponse= await response.json()
   console.log(jsonResponse);
     let result={
      temp: jsonResponse.main.temp,
      tempMini: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      pressure:jsonResponse.main.pressure,
     }
     console.log(result);
     
  }


  let handleChange=(evt)=>{
     setCity(evt.target.value)
  }

  let handleSubmit=(evt)=>{
      evt.preventDefault()
      console.log(city);
      setCity("")
      getWeatherInfo()
  }
  return (
    <div>
      <form className='BoxStyle' onSubmit={handleSubmit}>
        {/* <TextField  className='txtField'  id="city" label="Search City Name" required value={city} onChange={handleChange} /> */}
         <TextField className='txtField' id="city" label="Search City Name" variant="filled" required value={city} onChange={handleChange}/>
        <button className='SearchIcon' > < SearchSharpIcon className='icon' /> </button>
      </form>
    
    </div>
  )
}

export default SearchBox
