import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store.jsx';
import { Provider } from 'react-redux';
import 'globalthis/auto';
import 'global';
import { render } from "react-dom";  
import { BrowserRouter } from 'react-router-dom';

render(
 
  <Provider store={store}>
<BrowserRouter>
<App />
</BrowserRouter>
</Provider>
  ,
  document.getElementById("root")
);
