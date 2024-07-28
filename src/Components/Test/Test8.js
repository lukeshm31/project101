// src/App.js
import React, { Component } from 'react';
import { TodoForm, TodoList } from './Test7';
import { TodoProvider } from '../../Context/todoContext';
import { Box } from '@mui/material';

function Test8() {
  return (
    <TodoProvider>
      <Box>
        <TodoForm />
        <TodoList />
      </Box>
    </TodoProvider>
  );
}

export default Test8;