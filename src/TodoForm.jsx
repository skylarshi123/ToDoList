import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Create from "@mui/icons-material/Create";


export default function TodoForm({addTodo}) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      addTodo(text);
      setText("");
    }
  };
  return (
    <ListItem>
        <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={handleChange}
        value={text}
        InputProps = {{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="create todo"
                edge="end"
              >
                <Create />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      </form>
    </ListItem>
  );
}

