import React from "react";
import { createContext, useContext } from "react";

export const ToDoContext = createContext(
    {
        todos: [
            {
                id:1,
                todo: "send message",
                completed: false,
            }
        ],
        addToDo : (todo) => {},
        updateToDo: (id, todo) => {},
        deleteToDo: (id) => {},
        toggleComplete: (id) => {},
        
    }
)


export const UseToDo = () => {
    return useContext(ToDoContext)
}

export const ToDoContextProvider = ToDoContext.Provider