import React from 'react'

function TodoList({todos, setTodos}) {
  return (
    <div>
        {todos.map((todo)=>{
            <li className='todo-list' key={todo.id}
        })}
    </div>
  )
}

export default TodoList