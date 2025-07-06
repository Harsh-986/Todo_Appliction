import axios from 'axios';
import React from 'react'

const CreateTodo = () => {

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const formSubmit = () => {

    axios.post("http://localhost:3000/todo", { // why axios is better than fetch? - 
                                               // axios automatically transforms the response to JSON , and it has a simpler API 
      title,
      description
    })

    .then((response) => {
      console.log(response);
      setTitle('');
      setDescription('');
      alert("Todo created successfully");
    }) 
    .catch((error) => {
      console.error("Error creating todo:", error);
      alert("Error creating todo");
    });

  }
  return (
    <div id="todo-wrapper">
      <div id="create-todo">
        <input type="text" placeholder="Title" id="title" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Description" id="description" onChange={(e) => setDescription(e.target.value)} />
        <button id="create" onClick={formSubmit}>Create Todo</button>
      </div>
    </div>

  )
}

export default CreateTodo