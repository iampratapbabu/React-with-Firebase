import React,{Fragment,useEffect,useState} from 'react';
import './App.css';
import Todo from './Todo';
import db from './utils/firebase';

//material-ui
import { Button,FormControl,Input,InputLabel } from '@material-ui/core';

//Components
//import Header from './layout/header';
//import Footer from './layout/footer';

function App() {
  const [todos,setTodos] = useState(["Take the dog out","buy bread from the shop","pratapbabu wants to livestream today"])
  const [input,setInput] = useState("");

  //fetchind data from firebase
  useEffect(()=>{
    db.collection('todos').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc =>doc.data().todo));
    });
  },[]);

  const handleChange = e =>{
    setInput(e.target.value)
  };

  const addTodo = (e) =>{
    e.preventDefault();

    db.collection('todos').add({
      todo:input
    });
    // setTodos([...todos,input]);
    setInput('');
  }

  return (
    <Fragment>

    <div className="container">
      <h1>TO-DO</h1>

      <form>
      <FormControl>
      <InputLabel>Write a Todo</InputLabel>
      <Input value={input} onChange = {handleChange}/>
      </FormControl>

      <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>
        ADD
      </Button>
      </form>

      <ul>
      {todos.map((todo) =>(
        <Todo text={todo}/>
      ))}
      </ul>
    </div>

    </Fragment>
  );
}

export default App;
