import React, { useState } from 'react'



const Form = () => {
    let [name,setName]=useState("abc")
  return (
    <div>
      <input placeholder="Enter your name" type="text" value={name} onChange={} />
      <button>submit</button>
    </div>
  )
}

export default Form
