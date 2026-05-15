import React from 'react'

const Amazone_Price = ({oldprice,newprice}) => {
  let oldstyle={textDecorationLine:"line-through"}
  let newstyle={fontWeight:"bold"}
  let stylecolor={backgroundColor:"pink",
    height:"35px",
    borderBottomLeftRadius:"20px",
    borderBottomRightRadius:"20px"
   
  }
  return (
    <div style={stylecolor}>
        <span style={oldstyle}>{oldprice}</span>
        &nbsp;  &nbsp;  &nbsp;

        <span style={newstyle}>{newprice}</span>
    </div>
  )
}

export default Amazone_Price