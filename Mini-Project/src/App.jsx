import { useState } from 'react'
import './App.css'
import  MaterialUI from "./MaterialUI";
import WeatherApp from './Weather_App'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <MaterialUI/> */}
    <WeatherApp/>
    
    </>
  )
}

export default App
