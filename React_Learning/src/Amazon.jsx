

import Amazon_Cart from './Amazon_Cart.jsx';

const Amazon = () => {
  // 
  let details_produt1=[<li>8000 DPI</li>, <li>5 Programmable button</li>]
  let details_produt2=[<li>Intuitive Touch Surface</li>,<li>Designed for iPad Pro</li>]
  let details_produt3=[<li>Designed for iPad Pro</li>,<li>Intuitive Touch Surface</li>]
  let details_produt4=[<li>Wireless Mouse 2.4Hz</li>,<li>Optical Orientation</li>]
  return (
    <div>
        <Amazon_Cart title="Logitech MX Master 35" description={details_produt1}/>
        <Amazon_Cart  title="Apple Pencil(2nd Gen)" description={details_produt2}/>
        <Amazon_Cart title="Zebronics" description={details_produt3} />
        <Amazon_Cart title="Pentronics Toad" description={details_produt1}/>
    </div>
  )
}

export default Amazon