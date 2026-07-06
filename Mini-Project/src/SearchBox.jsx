import React, { useState } from 'react'
import './SearchBox.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
const SearchBox = () => {
  let [city,setCity]=useState("")
  let handleChange=(evt)=>{
     setCity(evt.target.value)
  }
  let handleSubmit=(evt)=>{
      evt.preventDefault()
      console.log(city);
      setCity("")
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
