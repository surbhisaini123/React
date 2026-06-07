import {useState} from "react";
import React from 'react'
import './Lottery.css'
import { genTicket,sum } from "./Lottery_Hellper";
import LO_Ticket from "./LO_Ticket";

const Lottery = ({n,winningSum}) => {
    let [ticket,setTicket]=useState(genTicket(n))
    let isWinning=sum(ticket)===winningSum
    let buyTicket=()=>{
        setTicket(genTicket(n))
    }
  return (
    <div>
      <h4>Lottery Game!!!!</h4>
      <LO_Ticket ticket={ticket}/>
        <button onClick={buyTicket}>Buy new Ticket</button>  
      <h3>{isWinning && "congratulation you won"}</h3>
      
    </div>
  )
}

export default Lottery
