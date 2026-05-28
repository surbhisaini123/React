import React from 'react'
import { useState } from "react";
const LudoBoard = () => {
    let [move,setMove]=useState({blue:0,green:0,yellow:0,red:0})
  return (
    <div>
      <p>Game Begins!!</p>
      <div className='board'>
        <p>Blue move={move.blue}</p>
        <button style={{backgroundColor:"blue", color:"white"}}>+1</button>
        <p>Green move={move.green}</p>
        <button style={{backgroundColor:"green"}}>+1</button>
        <p>Yellow move={move.yellow}</p>
        <button style={{backgroundColor:"yellow"}}>+1</button>
        <p>Red move={move.red}</p>
        <button style={{backgroundColor:"red"}}>+1</button>

      </div>
    </div>
  )
}

export default LudoBoard
