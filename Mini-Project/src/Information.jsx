import React from 'react'
import './Info.css'
const Information = () => {
  let info={
    city:"Jabalpur",
    temp:25.73,
    temMax:25.73,
    temMini:25.73,
    humidity:87
  }
  return (
  
    <div>
      <div className='info-box'>
        <div><h1>{info.city}</h1></div>
         
        <div className='inner-info'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
k
        </div>
       
       
      </div>
    </div>
  )
}

export default Information
