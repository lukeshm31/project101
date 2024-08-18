import React from "react";
import { AddTodo } from "./Test11";
import { Provider } from "react-redux";
import { store } from "./Test9";


export function Test12(){
    return(
        <Provider store={store}>
        <AddTodo/>
        </Provider>
    )
} 