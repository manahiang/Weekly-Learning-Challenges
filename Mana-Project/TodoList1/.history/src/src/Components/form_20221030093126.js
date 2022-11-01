import React from 'react'
import{v4 as uuidv4} from "uuid"
function Forom({input, setInput, todos, setTodos}) {
    const onInputChange=(event)=>{
        setInput(event.target.value);
        setInput
    
    }
    const onFormSubmit=(event)=>{
        event.preventDefault();
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