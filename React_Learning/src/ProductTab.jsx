// ---------PART1---------

// import Product from './product.jsx'
// import React from 'react'


// const ProductTab = () => {
//   return (
//     <div>
//       <Product/>
//     </div>
//   )
// }

// export default ProductTab

//-----PART2----------
// propes
import Product from './Product.jsx'
import React from 'react'

const ProductTab = () => {
let option=["xyz","abc","pqr"]
let option2={a:"cute",b:"preety",c:"beautyfull"}
  return (
    <div>
      <Product  title="phone" price={3000} feature={option} feature2={option2}/>
      <Product title="laptop" price={40000} feature2={option2}/>
      <Product  title="pen" price={50000} feature2={option2}/>
    </div>
  )
}

export default ProductTab

