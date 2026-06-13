import React, { useState } from 'react'

const Comment = () => {
  let[formData,setFormData]=useState({
    username:"",
    remark:"",
    rating:5
  })
  let handleInputChange=(event)=>{
    setFormData((currData)=>{
      return {...currData,[event.target.name]:event.target.value}
    })
  }
  let handleSubmit=(event)=>{
    event.preventDefault()
    setFormData({
       username:"",
    remark:"",
    rating:5
    })
  }

  return (
    <div>
      <h4>Give a comment!!!</h4>
      <form onSubmit={handleSubmit}>
        <input placeholder='username' type="text" value={formData.username} onChange={handleInputChange} id='username' name='username'/>
        <br></br>  <br></br>
        <textarea placeholder="add remarks"value={formData.remark} onChange={handleInputChange} id='remark' name="remark"></textarea>
         <br></br>  <br></br>
         <input placeholder='rating' type='number' min={1} max={10} value={formData.rating} onChange={handleInputChange} id='rating' name='rating'/>
          <br></br> <br></br>
          <button> Add comment</button>
      </form>
        
    </div>
  )
}

export default Comment