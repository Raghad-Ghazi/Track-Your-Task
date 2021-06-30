import { useDispatch } from "react-redux"
import React from 'react'

export default function input() {

    const dispatch = useDispatch()
    const [newTodo,setNewTodo] = useState();

    handleChange = (event) => {
        setNewTodo(event.target.value)
      };

      handleAdd = () => dispatch({
          type : 'ADD',
          payload:{
          label: newTodo,
          id :Math.ceil(math.random()*100)
          }
    }
      )


    return (
        <div>
        <input type='text' value={newtodo} onChange={handleChange()}/>
        <button onClick={handleAdd}>Add</button>
        </div>
    )
}


