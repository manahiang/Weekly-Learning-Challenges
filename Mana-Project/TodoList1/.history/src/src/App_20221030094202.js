//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Forom from './Components/form';
import { useState } from 'react';
import TodoList from './Components/TodoList';

function App() {
  const[input,setInput]=useState(" ")
  const[todos, setTodos]=useState([])
  return(
    <div>
      <div><Header/></div>
      <div><Forom 
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      /></div>
      <div><TodoList todos={todos} setTodos={setTodos}/></div>
    </div>
  )

}

export default App;
