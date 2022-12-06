import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx';
import { TodoProvaider } from './utils/todoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoProvaider>
    <App />
  </TodoProvaider>
); 