import React from 'react'

function TodoList({todos, setTodos}) {
    const handleDelete=({id})=>{
        setTodos(todos.filter((todo)=>todo.id!==id));
    }
    const handleComplete=(todo)=>{
        setTodos(todos.map((item)=
    }
  return (
    <div>  
        {todos.map((todo)=>(
            <li className='todo-list' key={todo.id}><br/>
                <input 
                type="text"
                value={todo.title}
                className="list"
                onChange={(event)=>event.preventDefault()}
                />
                
                    <button onClick={()=>handleComplete(todo)}>check</button>
                    <button onClick={()=>handleDelete(todo)}>delete</button>
                    <button>edit</button>
                
            </li>
        ))}
    </div>
  )
}

export default TodoList