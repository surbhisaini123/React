import React from 'react'
import BackGroundIMG from './assets/backgroundImage.jpg'
import './WeatherApp.css'
import SearchBox from './SearchBox'
const Weather_App = () => {
  return (
    <div className='Bg'>
        <div >
             <SearchBox/>
{/* <img src={BackGroundIMG} className='BG_IMG' /> */}
        </div>
      
      

    </div>
  )
}

export default Weather_App
