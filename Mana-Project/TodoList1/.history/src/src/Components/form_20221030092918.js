import React from 'react'

function Forom({input, setInput, todos, setTodos}) {
    const onInputChange=(event)=>{
        setInput(event.target.value);
    
    }
    const onFormSubmit=(event)=>{
        
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