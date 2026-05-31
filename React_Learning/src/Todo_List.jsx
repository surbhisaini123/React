import { useState } from "react";
import React from 'react'

const Todo_List = () => {
    let [todo,setTodo]=useState(["sammple task"])
    let [newTodo,setNewTodo]=useState("")
    let addNewTask=()=>{
       setTodo([...todo,newTodo])
         setNewTodo("")
    }
    let updateTodoValue=(event)=>{
        // console.log(event.target.value);
       setNewTodo (event.target.value)
      

    }
  return (
    <div>
            <input placeholder='text'  value={newTodo} onChange={updateTodoValue}></input>
            <button onClick={addNewTask}>ADD</button>
            <button>DEL</button>
            <h4>TODO APP</h4>
            <ul >
                {
                    todo.map((todo)=>(
                        <li>{todo}</li>
                    ))
                }
            </ul>
       
    </div>
  )
}

export default Todo_List