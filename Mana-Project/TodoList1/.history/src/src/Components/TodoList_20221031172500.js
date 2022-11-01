import React from 'react'

function TodoList({ todos, setTodos, setEditTodo }) {
    // const handleComplete=(todo)=>{
    //     setTodos(
    //         todos.map((item)=>{
    //             if(item.id===todo.id){
    //                 return{...item, completed: !item.completed}
    //             }
    //             return item;
    //         })
    //     )
    // }
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }



    const handleEdit = ({id}) => {
        const findTodo=todos.find((todo)=>todo.id===id);
        console.log('findTodo', findTodo);
        setEditTodo(findTodo);
    }
    return (
        <div style={{textAlign:'center'}}>
            {todos.map((todo) => (
                <div key={todo.id} type="number"><br />
                    <input
                        type="text"
                        value={todo.title}
                        placeholder="input todo list"
                        className={`list ${todo.completed?"complete":" "}`}
                        onChange={(event) => event.preventDefault()}
                    />

                    {/* /<button onClick={() => handleComplete(todo)}>check</button> */}
                    <button onClick={() => handleDelete(todo)}>delete</button>
                    <button onClick={() => handleEdit(todo)}>edit</button>

                </div>
            ))}
        </div>
    )
}
//success fully

export default TodoList