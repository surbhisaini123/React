
// import React from 'react'
// // import './App.css'
// import Amazon from './Amazon.jsx'

// //import Title from './Title.jsx';
// //import ProductTab from './ProductTab.jsx';
// //import Activity from './Activity.jsx'


// const App = () => {
//   return (
//     // REACT FRAGMENTATION
//   //  <>
//   //  <Title/>
//   //  <Title/>
//   //  <Title/>
//   //  </>
//   <div>
//     {/* <Activity userName="surbhi" textColor="pink"/> */}
//     <h3>Blockbuster Deals | Shop Now</h3>
//      <Amazon/>
    
//   </div>
       
   
  
//   )
// }

// export default App

import React from 'react'
import Event from './Event.jsx'
import Like_Button from './Like_Button.jsx'
import LudoBoard from './LudoBoard.jsx'
import Todo_List from './Todo_List.jsx'
import Lottery from './Lottery.jsx'
import LO_TicketNO from './LO_TicketN0.jsx'
const App = () => {
  return (
    <div>
      {/* <Event/> */}
      {/* <Like_Button/> */}
      {/* <LudoBoard/> */}
      {/* <Todo_List/> */}
      {/* <Lottery/> */}
      <LO_TicketNO num={5} />
    </div>
  )
}

export default App

