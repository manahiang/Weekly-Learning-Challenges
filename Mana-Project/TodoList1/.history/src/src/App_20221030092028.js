//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Forom from './Components/form';
import { useState } from 'react';

function App() {
  const[input,setInput]=useState(" ")
  const[todos, setTodo]=useState([])
  return(
    <div>
      <div><Header/></div>
      <div><Forom
        input={input}
      /></div>
    </div>
  )

}

export default App;
