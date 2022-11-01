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
                />
                <div>
                    
                </div>
            </li>
        ))}
    </div>
  )
}

export default TodoList