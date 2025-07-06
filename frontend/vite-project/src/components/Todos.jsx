const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>

          <div id="todo">
            <h3>{todo.title}</h3>
            <button id= "create">{todo.completed ? "Completed" : "Not Completed"}</button>
          </div>
          <p>{todo.description}</p>
            
        </div>
      ))}
    </div>
  );
};

export default Todos;
