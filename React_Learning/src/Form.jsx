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
      userName:"",
      password:""
    })
    let handleInputChange=(event)=>{
      let feildName=event.target.name  //CHANGE FEILD
      let newVal=event.target.value
      // console.log(feildName);
      // console.log(newVal);
      setFormData((currData)=>{
        // currData[feildName]=newVal  //OLD WAY TO WRITE
        // return{...currData}
        return {...currData,[feildName]:newVal}   // NEW WAY TO WRITE
      })
    }

    let handleSubmit=(event)=>{
      event.preventDefault()
      console.log(formData)
      setFormData({
        fullName:"",
        userName:"",
        password:"",
      })
    }
  return (

    <div>
      <form onSubmit={handleSubmit} >
        <label htmlFor='fullName'>full Name</label>
        <input placeholder="Enter your name" type="text" value={formData.fullName} onChange={handleInputChange} id='fullName' name="fullName" />
  

      <br></br>
         <label htmlFor='userName'>User Name</label>
        <input placeholder="Enter your username" type="text" value={formData.userName} onChange={handleInputChange} id='userName' name="userName"  autoComplete='new-password'/>
        
         <br></br>
         <label htmlFor='password'>Password</label>
        <input placeholder="Enter your password" type="password" value={formData.password} onChange={handleInputChange} id='password' name="password"  autoComplete='new-password' />
        <button>submit</button>
      </form>
      
    </div>
  )
}

export default Form
