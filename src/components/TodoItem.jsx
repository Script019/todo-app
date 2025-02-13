function TodoItem({ todo, toggleComplete, deleteTodo }) {
    return (
      <li style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>
        <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </li>
    );
  }
  
  export default TodoItem;
  