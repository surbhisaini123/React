import React from 'react'
import './WeatherApp.css'
import SearchBox from './SearchBox'
import Information from './Information.jsx'

const WeatherApp = () => {
  return (
    <div  className='BG_IMG' >
      <SearchBox/>
      <Information/>

    </div>
  )
}

export default WeatherApp