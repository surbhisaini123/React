import React from 'react'
import BackGroundIMG from './assets/backgroundImage.jpg'
import './WeatherApp.css'
import SearchBox from './SearchBox'
const Weather_App = () => {
  return (
    <div className='Bg'>
        <div >
             <SearchBox/>

        </div>
      {/* <img src={BackGroundIMG}/> */}
     

    </div>
  )
}

export default Weather_App
