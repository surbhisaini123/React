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


import React from 'react'
function clickHandler(){
    console.log("hii");
    
}
 function hoverHandler(){
    console.log("byy");
}
function handleDblClick(){
    console.log("hello");
    
}
const Event = () => {
  return (
    <div>
        <button onClick={clickHandler}>click</button>
      <p onMouseOver={hoverHandler} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia consectetur doloribus adipisci fugit praesentium provident, error iste amet est repellat saepe! Possimus ea cum in inventore, facilis tempore veniam!</p>
      <button onDoubleClick={handleDblClick}>double click me </button>
    
    </div>
  )
}

export default Event
