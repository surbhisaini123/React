import React, { useEffect, useState } from 'react'

const Joker = () => {
    let [joke,setJoke]=useState({})


const URL="https://official-joke-api.appspot.com/random_joke" 

const newJoke=async () => {
    let response=await fetch(URL)
    let newResponse=await response.json()
    // console.log(newResponse);
    setJoke({
        setup:newResponse.setup,
        punchline:newResponse.punchline
    })
    
}

useEffect(()=>{
    async function getFirstJoke() {
       let response=await fetch(URL)
       let newResponse=await response.json()
    // console.log(newResponse);
        setJoke({
           setup:newResponse.setup,
           punchline:newResponse.punchline
        }) 
    }
    getFirstJoke()
},[])


  return (
    <div>
        <h4>JOKES!!!!!!!</h4>
        <h3>{joke.setup}</h3>
        <h3>{joke.punchline}</h3>
        <button onClick={newJoke}>new joke</button>
    </div>
  )
}

export default Joker