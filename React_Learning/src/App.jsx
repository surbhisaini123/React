
import React from 'react'
import './App.css'
import Title from './Title.jsx';
import ProductTab from './ProductTab.jsx';


const App = () => {
  return (
    // REACT FRAGMENTATION
  //  <>
  //  <Title/>
  //  <Title/>
  //  <Title/>
  //  </>
  <div>
     <Title/>
     <Title/>
    <Title/>
    <ProductTab/>
  </div>
       
   
  
  )
}

export default App



