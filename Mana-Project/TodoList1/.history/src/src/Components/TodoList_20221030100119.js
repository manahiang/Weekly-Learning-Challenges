import React from 'react'

function TodoList({todos, setTodos}) {
  return (
    <div>
        {todos.map((todo)=>(
            <li className='todo-list' key={todo.id}>
                <input 
                type="text"
                value={todo.title}
                className="list"
                onChange={(event)=>event.preventDefault()}
                /><br/>
                
                    <button>check</button>
                    <button>delete</button>
                    <button>edit</button>
                
            </li>
        ))}
    </div>
  )
}

export default TodoList