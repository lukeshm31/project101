import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Components/Student/00_layout_elements/02_layout';
import { Test01 } from './Components/Student/01_functions/test_a';
import { Test02 } from './Components/Student/01_functions/test02';
import InputBox from './Components/Test/Test1';
import { BgChanger } from './Components/Test/Test2';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='a' element={<Test01/>} >  </Route>
      <Route path='b' element={<Test02/>}>  </Route>
      <Route path='c' element={<InputBox/>}> </Route>
      <Route path='d' element={<BgChanger/>}> </Route>
      
    </Route>
  )


)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
