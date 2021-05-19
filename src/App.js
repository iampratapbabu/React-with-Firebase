import React,{Fragment,useState} from 'react';
import './App.css';

//Components
import Header from './layout/header';
import Footer from './layout/footer';

function App() {
  const [todos,setTodos] = useState(["Take the dog out","buy bread from the shop","pratapbabu wants to livestream today"])
  const [input,setInput] = useState("");

  const handleChange = e =>{
    setInput(e.target.value)
  }

  const addTodo = (e) =>{
    e.preventDefault();
    setTodos([...todos,input]);
    setInput('');
  }

  return (
    <Fragment>

    <div className="container">
      <h1>TO-DO</h1>

      <form>
      <input value={input} onChange = {handleChange}/>
      <button type="submit" onClick={addTodo}>add</button>
      </form>

      <ul>
      {todos.map((todo) =>(
        <li><h5>{todo}</h5></li>
      ))}
      </ul>
    </div>
  
    </Fragment>
  );
}

export default App;
