import React, { useEffect } from 'react'
import { v4 as uuidv4 } from "uuid"

function Forom({ input, setInput, todos, setTodos, editTodo, setEditTodo }) {
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => todo.id === id ? { title, id, completed } : todo)
        setTodos(newTodo)
        setEditTodo("");
    };

    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title);
        }else{
            setInput(" ");
        }
    },[setInput, editTodo])
    const onInputChange = (event) => {
        setInput(event.target.value);

    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTodo) {


            setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
            // console.log(...todos)
            setInput(" ");
        }
        else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    }

    return (
        <form onSubmit={onFormSubmit} style={{textAlign:'center'}}>
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