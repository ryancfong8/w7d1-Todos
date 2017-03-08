import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { allTodos } from './reducers/selectors.js';
import {receiveTodos, receiveTodo, fetchTodos} from './actions/todo_actions.js';
import Root from './components/root.jsx';


document.addEventListener("DOMContentLoaded", function(){
  const store = configureStore();
  window.store = store;
  window.allTodos = allTodos;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.fetchTodos = fetchTodos;
  ReactDOM.render(<Root store={store} />, document.getElementById('content'));
});
