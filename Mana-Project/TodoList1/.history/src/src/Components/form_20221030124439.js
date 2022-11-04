import React from 'react'
import{v4 as uuidv4} from "uuid"
function Forom({input, setInput, todos, setTodos, editTodo,setEditTodo}) {
    const onInputChange=(event)=>{
        setInput(event.target.value);
    
    }
    const onFormSubmit=(event)=>{
        event.preventDefault();
        if(!editTodo){

        
        setTodos([...todos, {id: uuidv4(), title:input, completed:false}])
        setInput(" ");
        }
        else{
            
        }
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