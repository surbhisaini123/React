import React, { useState } from 'react'



const Form = () => {
    // let [name,setName]=useState("abc")
    // let handleNameChange=(event)=>{             // TO HANDLE SINGLE INPUT
    //   console.log(event.target.value);
    //   setName(event.target.value)
    // }

    // TO HANDLE MULTIPLE INPUT

    let [formData,setFormData]=useState({
      fullName:"",
      userName:""
    })
    let handleInputChange=(event)=>{
      let feildName=event.target.name  //CHANGE FEILD
      let newVal=event.target.value
      // console.log(feildName);
      console.log(newVal);
      
      
    }
  return (
    <div>
      <form >
        <label htmlFor='fullName'>full Name</label>
        <input placeholder="Enter your name" type="text" value={formData.fullName} onChange={handleInputChange} id='userName' name="fullName"/>
        <button>submit</button>

      <br></br>
         <label htmlFor='userName'>User Name</label>
        <input placeholder="Enter your username" type="text" value={formData.userName} onChange={handleInputChange} id='userName' name="userName"/>
        <button>submit</button>
      </form>
      
    </div>
  )
}

export default Form
