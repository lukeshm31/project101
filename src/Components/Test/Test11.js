// Add Todo and SHow todos
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./Test10Slice";
import { Box } from "@mui/material";
import { Height, Margin } from "@mui/icons-material";

export function AddTodo() {
    const [data, setData] = useState('..')

    const dispatch = useDispatch()
    const todos = useSelector(state=>state.todos)

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(data))
        setData('')
        
        
        
    }
    
    return (
        <>
            <Box sx={{m:2}}>
                <form onSubmit={addTodoHandler}>   

                    <TextField
                    id="task"
                    name="task"
                    label="Write your task here"
                    variant="standard"
                    value={data}
                    onChange={(e)=>{setData(e.target.value)}}

                    />


                    <Button variant="contained" type="submit">
                    Submit
                    </Button>
                </form>
                    
                <div>
                Task List
                <br/>

                {todos.map((todo)=>(
                    <li key={todo.id}> {todo.text}  </li>
                ))}
                </div>

            </Box>
        </>
    )
}