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
// let option=["xyz","abc","pqr"]
let option=[<li>xyz</li>,<li>pqr</li>,<li>abc</li>]
let option2={a:"cute",b:"preety",c:"beautyfull"}
  return (
    <div>
      <Product  title="phone" price={3000} feature={option} />
      <Product title="laptop" price={20000} feature={option}/>
      <Product  title="pen" price={50000} feature={option}/>
    </div>
  )
}

export default ProductTab

