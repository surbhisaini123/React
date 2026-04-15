
import React from 'react'
import './App.css'
import Title from './Title.jsx';
import ProductTab from './ProductTab.jsx';
import Activity from './Activity.jsx'


const App = () => {
  return (
    // REACT FRAGMENTATION
  //  <>
  //  <Title/>
  //  <Title/>
  //  <Title/>
  //  </>
  <div>
    <Activity userName="surbhi" textColor="pink"/>

     <Title/>
     <Title/>
    <Title/>
    <ProductTab/>
    
  </div>
       
   
  
  )
}

export default App



