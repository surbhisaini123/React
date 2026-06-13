import React, { useState , useEffect} from 'react'

const Counter = () => {
    // let [count,setCount]=useState(0)
    // let inCount=()=>{
    //     setCount((currCount)=>currCount+1)
    // }

    // useEffect(function printSoething(){
    //     console.log("this is side-effeccct");
        
    // })

    let [count1,setCount1]=useState(0)
    let [count2,setCount2]=useState(0)
    let inCount1=()=>{
        setCount1((currCount)=>currCount+1)
    }

     let inCount2=()=>{
        setCount2((currCount)=>currCount+1)
    }


    useEffect(function printSoething(){
        console.log("this is side-effeccct");
        
    },[])              //count1 count2 []

    
  return (
    <div>
      {/* <p>count={count}</p>
      <button onClick={inCount}>+1</button> */}


          {/* dependenies Array or Empty */}
       <p>count1={count1}</p>
      <button onClick={inCount1}>+1</button>

       <p>count2={count2}</p>
      <button onClick={inCount2}>+1</button>
    </div>
  )
}

export default Counter
