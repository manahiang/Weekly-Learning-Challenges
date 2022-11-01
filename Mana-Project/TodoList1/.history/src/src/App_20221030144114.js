//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Forom from './Components/form';
import { useState } from 'react';
import TodoList from './Components/TodoList';
import {}

function App() {
  const initialState=JSON.parse(localStorage("todos")) || [];
  const[input,setInput]=useState(" ")
  const[todos, setTodos]=useState([])
  const[editTodo,setEditTodo]=useState(null)
  return(
    <div>
      <div><Header/></div>
      <div><Forom
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      /></div>
      <div><TodoList todos={todos} setTodos={setTodos}
        setEditTodo={setEditTodo}
      /></div>
    </div>
  )

}

export default App;
