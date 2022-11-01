//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Forom from './Components/form';
import { useEffect, useState } from 'react';
import TodoList from './Components/TodoList';

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState(" ")
  const [todos, setTodos] = useState(initialState)
  const [editTodo, setEditTodo] = useState(null)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);
  return (
    <div>
      <div><Header /></div>
      <div>
        <Forom
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div>
      <div>
        <TodoList todos={todos} setTodos={setTodos}
          setEditTodo={setEditTodo}
        />
      </div>
    </div>
  )

}

export default App;
