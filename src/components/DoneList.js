import React from 'react'
import {useSelector} from 'react-redux'

export default function TodoList() {

    const done = useSelector(state => state.done)
    const todos = useSelector(state => state.todos)
    let empty=''
    if ((!done ||!done.length) && (todos.length!==0))
    empty='Nothing yet :('
 
      
    return (
        <div  className="container">
          <h2>✧ Completed ✧</h2>
          <h5>{empty}</h5>
          <ul>
            {done.map(done =><li>{done.label} 👍</li>)}
          </ul>
        </div>
    )
}
