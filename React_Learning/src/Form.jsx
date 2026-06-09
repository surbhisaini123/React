import React, { useState } from 'react'



const Form = () => {
    let [name,setName]=useState("")
  return (
    <div>
      <input placeholder="Enter your name" type="text" value={name} />
      <button>submit</button>
    </div>
  )
}

export default Form
