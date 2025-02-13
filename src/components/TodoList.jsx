import { useState } from "react";

function TodoList({ todos, toggleTodo, editTodo, deleteTodo }) {
  const [editText, setEditText] = useState("");

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.isCompleted ? "completed" : ""}>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => toggleTodo(todo.id)}
          />
          {editText === todo.id ? (
            <input
              type="text"
              value={todo.text}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={() => {
                editTodo(todo.id, editText);
                setEditText("");
              }}
              autoFocus
            />
          ) : (
            <span onDoubleClick={() => setEditText(todo.text)}>{todo.text}</span>
          )}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
