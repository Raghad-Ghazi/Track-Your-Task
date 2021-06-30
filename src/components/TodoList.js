import React from 'react'

import {useSelector,useDispatch } from 'react-redux'

export default function TodoList() {

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    let empty=''
    if (!todos ||!todos.length)
   empty='No Todos'


    const handleClick = id => dispatch({
        type:'DELETE',
        payload:id
      })

    const handleClick1 = todo => dispatch({
        type:'DONE',
        payload:{
            label: todo.label,
            id :todo.id
            }        
      })
      
    return (
        <div className="container">
          <h2>✧ Todos ✧</h2>
          <h5>{empty}</h5> 
            <ul>
            {todos.map(todo =><li>{todo.label}  
             <span className="check" onClick={()=>handleClick1(todo)}> ✔ </span>
            <span className="delete" onClick={()=>handleClick(todo.id)}> ✘   </span>
           </li>)}
          </ul>
        </div>


    )
}
