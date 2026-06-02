import {useState} from "react";
import React from 'react'
import './Lottery.css'
import { genTicket,sum } from "./L_Hellper";

const Lottery = () => {
    let [ticket,setTicket]=useState(genTicket(3))
    let isWinning=sum(ticket)===15
    let buyTicket=()=>{
        setTicket(genTicket(3))
    }
  return (
    <div>
      <h4>Lottery Game!!!!</h4>
      <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>
        <br></br>
        <button onClick={buyTicket}>Buy new Ticket</button>  
      <h3>{isWinning && "congratulation you won"}</h3>
      
    </div>
  )
}

export default Lottery
