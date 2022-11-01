import React from 'react'

function TodoList({ todos, setTodos, setEditTodo }) {
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleComplete = (todo) => {
        setTodos(todos.map((item) => {
            return { ...item, Complete: !item.completed };

        }
        ))
    }

    const handleEdit = ({id}) => {
        const findTodo=todos.find((todo)=>todo.id===id);
        setEditTodo(findTodo);
    }
    return (
        <div>
            {todos.map((todo) => (
                <li className='todo-list' key={todo.id}><br />
                    <input
                        type="text"
                        value={todo.title}
                        className={`list ${todo.completed?"complete:"" }`}
                        onChange={(event) => event.preventDefault()}
                    />

                    <button onClick={() => handleComplete(todo)}>check</button>
                    <button onClick={() => handleDelete(todo)}>delete</button>
                    <button onClick={() => handleEdit(todo)}>edit</button>

                </li>
            ))}
        </div>
    )
}

export default TodoList