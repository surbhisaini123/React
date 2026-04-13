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
  let style={backgroundColor: price>20000 ? "yellow":""}

  const list=feature.map((feature) => <li>{feature}</li>)
  let isDiscount=price>4000 ? "dis 5%":""
   return (
   
    <div className="box" style={style}>
       <h1>{title}</h1>
       <h5>price: {price}</h5>
       {/* <p>{feature}</p> */}
       <p>{list}</p>
       {/* <p>{feature2.a}</p> */}
       <p>{isDiscount}</p>
    </div>
  )
  
}

export default Product
