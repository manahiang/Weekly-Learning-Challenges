import React from 'react'

function Forom({input, setInput, todos, setTodos}) {
    
  return (
    <form>
        <input 
            type="text"
            placeholde="Enter a Todo...."
            className={input}
            value={input}
            required
            />
            
    </form>
  )
}

export default Forom