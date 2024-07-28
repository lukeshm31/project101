// src/components/TodoList.js
import React, { useContext, useState} from 'react';
import { TodoContext } from '../../Context/todoContext';
// src/components/TodoForm.js
import { TextField, Button } from '@mui/material';
// src/components/TodoItem.js
import { ListItem, ListItemText, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


export const TodoList = () => {
  const { todos   
 } = useContext(TodoContext);
 
 return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};




const TodoItem = ({ todo }) => {
  const { toggleComplete, removeTodo } = useContext(TodoContext);
  
  return (
    <ListItem>
      <Checkbox checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
      <ListItemText style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</ListItemText>
      <IconButton onClick={() => removeTodo(todo.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};



export const TodoForm = () => {
  const [text, setText] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Add Todo" value={text} onChange={(e) => setText(e.target.value)} />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
};


