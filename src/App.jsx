import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", isCompleted: false },
    { id: 2, text: "Build a Todo App", isCompleted: false },
    { id: 3, text: "Master State Management", isCompleted: false }
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, isCompleted: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
