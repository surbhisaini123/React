

import Amazon_Cart from './Amazon_Cart.jsx';

const Amazon = () => {
  let details_produt1=[<li>8000 DPI</li>, <li>5 Programmable button</li>]
  let details_produt2=[<li>Intuitive Touch Surface</li>,<li>Designed for iPad Pro</li>]
  let details_produt3=[<li>Designed for iPad Pro</li>,<li>Intuitive Touch Surface</li>]
  let details_produt4=[<li>Wireless Mouse 2.4Hz</li>,<li>Optical Orientation</li>]
  let style={display:"flex"}
  return (
    <div style={style}>
        <Amazon_Cart title="Logitech MX Master 35" description={details_produt1} idx={0}/>
        <Amazon_Cart  title="Apple Pencil(2nd Gen)" description={details_produt2} idx={1}/>
        <Amazon_Cart title="Zebronics" description={details_produt3} idx={2} />
        <Amazon_Cart title="Pentronics Toad" description={details_produt1} idx={3}/>
    </div>
  )
}

export default Amazon

