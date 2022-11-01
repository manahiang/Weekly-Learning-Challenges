import React from 'react'

function TodoList({todos, setTodos}) {
    const handleDelete=({id})=>{
        setTodos(todos.filter((todo)=>todo.id!==id));
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
                
                    <button>check</button>
                    <button onClick={()=>handleDelete(todo)}>delete</button>
                    <button>edit</button>
                
            </li>
        ))}
    </div>
  )
}

export default TodoList