import {useState} from 'react'
import React from 'react'

const likeButton = () => {
  let [isLike,setIslike]=useState(false)
 
  let toggleLike=()=>{
    setIslike(!isLike) 
  }
  let likeStyle={
    color:'blue'
  }
  return (
    <div>
       <p onClick={toggleLike}>
        {isLike ? (
          <i className="fa-solid fa-heart" style={likeStyle}></i>
        ):(
          <i className="fa-regular fa-heart"></i>

        )}
        
        </p>
    </div>
  )
}

export default likeButton