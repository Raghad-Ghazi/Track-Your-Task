import { useDispatch } from "react-redux"

import React ,{useState}from 'react'


export default function TodoInput() {
    const dispatch = useDispatch()
    const [newTodo,setNewTodo] = useState();

    const handleChange = (event) => {
        setNewTodo(event.target.value)

      };

      const check =()=>{
        if(!newTodo)
        return
        else
        handleAdd()
        
      }

      const handleAdd = () => dispatch(
        {
          type : 'ADD',
          payload:{
          label: newTodo,
          id :Math.ceil(Math.random()*100)
          }   
    }
      )

    return (
        <div >
        <input type='text' value={newTodo} onChange={handleChange}/>
        <button onClick={check}>Add</button>
        </div>
    )
}


  