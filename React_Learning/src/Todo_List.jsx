// import { useState } from "react";
// import React from 'react'

// const Todo_List = () => {
//     let [todo,setTodo]=useState(["sammple task"])
//     let [newTodo,setNewTodo]=useState("")
//     let addNewTask=()=>{
//        setTodo([...todo,newTodo])
//          setNewTodo("")
//     }
//     let updateTodoValue=(event)=>{
//         // console.log(event.target.value);
//        setNewTodo (event.target.value)
      

//     }
//   return (
//     <div>
//             <input placeholder='text'  value={newTodo} onChange={updateTodoValue}></input>
//             <button onClick={addNewTask}>ADD</button>
//             <button>DEL</button>
//             <h4>TODO APP</h4>
//             <ul >
//                 {
//                     todo.map((todo)=>(
//                         <li>{todo}</li>
//                     ))
//                 }
//             </ul>
       
//     </div>
//   )
// }

// export default Todo_List

// <<<<<<-------------UNIQUE KEY FOR LIST ITEM-------->>>>>>>
// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import React from 'react'

// const Todo_List = () => {
//     let [todo,setTodo]=useState([{task:"sample task",id:uuidv4()}])
//     let [newTodo,setNewTodo]=useState("")
//     let addNewTask=()=>{
//        setTodo([...todo,{task:newTodo ,id:uuidv4()}])
//          setNewTodo("")
//     }
//     let updateTodoValue=(event)=>{
//         // console.log(event.target.value);
//        setNewTodo (event.target.value)
      

//     }
//   return (
//     <div>
//             <input placeholder='text'  value={newTodo} onChange={updateTodoValue}></input>
//             <button onClick={addNewTask}>ADD</button>
//             <button>DEL</button>
//             <h4>TODO APP</h4>
//             <ul >
//                 {
//                     todo.map((todo)=>(
//                         <li key={todo.id}>{todo.task}</li>
//                     ))
//                 }
//             </ul>
       
//     </div>
//   )
// }

// export default Todo_List

// <<<<<<<<<------DELETE FROM THE ARRAY----------->>>>>>>>>>>

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import React from 'react'

const Todo_List = () => {
    let [todo,setTodo]=useState([{task:"sample task",id:uuidv4()}])
    let [newTodo,setNewTodo]=useState("")
    let addNewTask=()=>{
       setTodo((prevtodo)=>{
        return [...prevtodo,{task:newTodo ,id:uuidv4()}]
       })
         setNewTodo("")
    }
    let updateTodoValue=(event)=>{
       setNewTodo (event.target.value)
    }
    let deleteTodo=(id)=>{
    //   let copy= todo.filter((todo)=>todo.id!=id)
    //    console.log(copy);
    setTodo((prevtodo)=>{
        return todo.filter((prevtodo)=>prevtodo.id!=id)
    })
        
    }
    let upperCaseAll=()=>{
        setTodo(
            todo.map((todo)=>{
               return {...todo,
                 task:todo.task.toUpperCase(),
              }  
            })
        )
    } 

let upperCaseOne =(id)=>{
    setTodo(
        todo.map((todo)=>{
            if(todo.id==id){
                 return {...todo,
                  task:todo.task.toUpperCase(),
                }
            }else{
                return todo
            }
             
        })
    )
         
}
  return (
    <div>
            <input placeholder='text'  value={newTodo} onChange={updateTodoValue}></input>
            <button onClick={addNewTask}>ADD</button>
            <h4>TODO APP</h4>
            <ul >
                {
                    todo.map((todo)=>(
                        <li key={todo.id}>
                            <span>{todo.task}</span>
                            &nbsp; &nbsp; &nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>del</button>
                            <button onClick={()=>upperCaseOne(todo.id)}>upperCase One</button>
                        </li>
                    ))
                }
            </ul>
       <button onClick={upperCaseAll}>UpperCase</button>
    </div>
  )
}     
export default Todo_List