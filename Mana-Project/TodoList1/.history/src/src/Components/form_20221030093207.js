import React from 'react'
import{v4 as uuidv4} from "uuid"
function Forom({input, setInput, todos, setTodos}) {
    const onInputChange=(event)=>{
        setInput(event.target.value);
    
    }
    const onFormSubmit=(event)=>{
        event.preventDefault();
        setTodos
    }
    
  return (
    <form onSubmit={onFormSubmit}>
        <input 
            type="text"
            placeholde="Enter a Todo...."
            className={input}
            value={input}
            required
            onChange={onInputChange}
            />
            
    </form>
  )
}

export default Forom