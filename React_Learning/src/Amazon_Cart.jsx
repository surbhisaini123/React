
import './Cart.css';

import Amazone_Price from './Amazone_Price';
const Amazon_Cart = ({title,description,idx}) => {
  let oldPrice=["12000","13000","14000","15000"]
  let newPrice=["11000","12000","13000","14000"]
  return (

       <div className="box">
        <h4>{title}</h4>
        <ul>
          {description}
        </ul>
        <Amazone_Price oldprice={oldPrice[idx]} newprice={newPrice[idx]}/>


    </div>

  
   
  )
}

export default Amazon_Cart