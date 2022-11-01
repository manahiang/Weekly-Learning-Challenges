import React from 'react'
import{v4 as uuidv4} from "uuid"
function Forom({input, setInput, todos, setTodos, e}) {
    const onInputChange=(event)=>{
        setInput(event.target.value);
    
    }
    const onFormSubmit=(event)=>{
        event.preventDefault();
        setTodos([...todos, {id: uuidv4(), title:input, completed:false}])
        setInput(" ");
    }   
    
  return (
    <form onSubmit={onFormSubmit}>
        <input 
            type="text"
            placeholder="enter the value"
            className={input}
            value={input}
            required
            onChange={onInputChange}
            />
            <button>Add</button>
            
    </form>
  )
}

export default Forom