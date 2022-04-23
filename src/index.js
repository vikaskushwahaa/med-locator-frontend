import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { useState } from "react";
import Home from './pages/Home'
import Result from './pages/Result'
import UpdateStock from './pages/UpdateStocks/PostForm'

import Login from './pages/LoginStore/Login'
import Register from './pages/Register'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        {/* <Routes> */}
        
        <Route path="/" component={App} exact/>
        <Route path="/home" component={Home} />
        <Route path="/loginStore" component={Login} exact />
        <Route path="/registerStore" component={Register} exact/>
        <Route path="/result" component={Result} exact/>
        <Route path="/updateStock" component={UpdateStock} exact/>

        {/* </Routes> */}
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);