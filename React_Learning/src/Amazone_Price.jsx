import React from 'react'

const Amazone_Price = ({oldprice,newprice}) => {
  return (
    <div style={{textAlign: "center"}}>
        <span>{oldprice}</span>
        &nbsp;  &nbsp;  &nbsp;

        <span>{newprice}</span>
    </div>
  )
}

export default Amazone_Price