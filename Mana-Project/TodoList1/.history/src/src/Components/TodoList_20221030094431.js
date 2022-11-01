import React from 'react'

function TodoList({todos, setTodos}) {
  return (
    <div>
        {todos.map((todo)=>{
            <li className='todo-list'
        })}
    </div>
  )
}

export default TodoList