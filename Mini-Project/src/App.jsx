import { useState } from 'react'
import './App.css'
import  MaterialUI from "./MaterialUI";
import WeatherApp from './Weather_App'
import BackGroundIMG from './assets/backgroundImage.jpg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='BG_IMG' >
      <WeatherApp/>
       {/* <MaterialUI/> */}

    </div>
   
   
  )
}

export default App
