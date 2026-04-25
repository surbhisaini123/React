
import './Cart.css';
const Amazon_Cart = ({title,description}) => {
  return (
    <div className="box">
        <h4>{title}</h4>
        <ul>
          {description}
        </ul>


    </div>
  )
}

export default Amazon_Cart