import React from 'react'

function Forom({input, setInput, todos, setTodos}) {
    const
    
  return (
    <form>
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