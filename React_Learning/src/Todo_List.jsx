import { useState } from "react";
import React from 'react'

const Todo_List = () => {
    let [newTodo,setNewTodo]=useState("")
    let addNewTask=()=>{
        console.log("we have to add new task in todo");
        
    }
  return (
    <div>
            <input placeholder='text' value={newTodo}></input>
            <button onClick={addNewTask}>ADD</button>
            <button>DEL</button>
            <h4>TODO APP</h4>
            <ul></ul>
       
    </div>
  )
}

export default Todo_List