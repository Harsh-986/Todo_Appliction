import React, { useState ,useEffect} from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'
import axios from 'axios'

function App() {

  const [todos , setTodos] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/todo")
    
      .then((response) => {
        console.log(response);
        setTodos(response.data.todos); // assuming your backend returns { todos: [...] }
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []);


  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos = {todos}></Todos>
    </div>
  )
}

export default App
