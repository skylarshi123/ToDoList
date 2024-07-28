import List from "@mui/material/List";
import TodoItem from "./TodoItem";

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

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} removeTodo={() => removeTodo(todo.id)} />;
      })}
    </List>
  );
}
