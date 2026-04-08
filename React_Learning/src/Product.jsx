// ----------PART1----------
// import React from 'react'
// import "./Product.css"
// const Product = () => {
//   return (
//     <div className="box">
//       <h1>product title</h1>
//       <h5>product Name</h5>
//     </div>
//   )
// }

// export default Product

//----------PART2-------
import React from 'react'
import "./Product.css"
const Product = ({title,price,feature,feature2}) => {
  
  return (
    <div className="box">
       <h1>{title}</h1>
       <h5>price: {price}</h5>
       <p>{feature}</p>
       {/* <p>{feature2.a}</p> */}
    </div>
  )
}

export default Product
