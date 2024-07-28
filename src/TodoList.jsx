import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";


import { useState } from "react";

const initialTodos = [
  {
    id: 1,
    text: "Todo 1",
    completed: true,
  },
  {
    id: 2,
    text: "Todo 2",
    completed: false,
  },
  {
    id: 3,
    text: "Todo 3",
    completed: false,
  },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (text) => {
    setTodos(prevTodos => {
      return[...prevTodos, {text: text, id: 8, completed: false}];
    })
  }

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            removeTodo={() => removeTodo(todo.id)}
            toggle={() => toggleTodo(todo.id)}
          />
        );
      })}
      <TodoForm addTodo={addTodo}/>
    </List>
  );
}
