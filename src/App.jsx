import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", isCompleted: false },
    { id: 2, text: "Build a Todo App", isCompleted: false },
  ]);

  // Function to add a new todo
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  // Function to toggle completion
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  // Function to edit a todo
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
