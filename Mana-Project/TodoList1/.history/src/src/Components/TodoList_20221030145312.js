import React from 'react'

function TodoList({ todos, setTodos, setEditTodo }) {
    const handleComplete=(todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id===todo.id){
                    return{...item, completed: !item.completed}
                }
                return item;
            })
        )
    }
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }



    const handleEdit = ({id}) => {
        const findTodo=todos.find((todo)=>todo.id===id);
        setEditTodo(findTodo);
    }
    return (
        <div style={{textAlign:'center'}}>
            {todos.map((todo) => (
                <li className='todo-list' key={todo.id} type=><br />
                    <input
                        type="text"
                        value={todo.title}
                        className={`list ${todo.completed?"complete":" "}`}
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