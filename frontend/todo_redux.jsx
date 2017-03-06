import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { allTodos } from './reducers/selectors.js';
import {receiveTodos, receiveTodo} from './actions/todo_actions.js';


document.addEventListener("DOMContentLoaded", function(){
  const store = configureStore();
  window.store = store;
  window.allTodos = allTodos;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  ReactDOM.render(<h1>Todos App</h1>, document.getElementById('root'));
});
