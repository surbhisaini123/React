// <<<<<<<<-----EVENT HANDILING CLICK EVENT-------->>>>>>>

// import React from 'react'
// function print(){
//     console.log("hello");
    
// }
// function something(){
//     console.log("byyy");
    
// }
// const Event = () => {
//   return (
//     <div>
//         <button onClick={print}>click me</button>
//         <p onClick={something}> this is paharagraph</p>
//     </div>
//   )
// }

// export default Event


// import React from 'react'
// function clickHandler(){
//  console.log("hii");
    
// }
//  function print(){
//     console.log("byy");
// }
// function handleDblClick(){
//     console.log("hello");
    
// }
// const Event = () => {
//   return (
//     <div>
//         {/* <button onClick={clickHandler}>click</button>///// */}
//       <p onMouseOver={print} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia consectetur doloribus adipisci fugit praesentium provident, error iste amet est repellat saepe! Possimus ea cum in inventore, facilis tempore veniam!</p>
//       {/* <button onDoubleClick={handleDblClick}>double click me </button> */}
//        <p onMouseOver={() =>alert("hover")} >hover me</p>
//     </div>
//   )
// }

// export default Event


// import React from 'react'
// function handlerFormSubmit(event){
//   event.preventDefault()
//   console.log("form submit");
  

// }
// const Event = () => {
//   return (
//     <div>
//       <form >
//         <input placeholder="text"/>
//         <button onClick={handlerFormSubmit}>submit</button>
//       </form>
//     </div>
//   )
// }

// export default Event


//<<<<<<<<<<<<-----USESTATE-------->>>>>>>
import { useState } from 'react';
import React from 'react'

const Event = () => {
    let [count,setCount]=useState(0)
    const incCount=()=>{
      setCount(count+1)
      console.log(count);
      
    }
  return (
    <div>
      <h3> count={count}</h3>
      <button onClick={incCount}>increase count</button>
    </div>
  )
}

export default Event
sa