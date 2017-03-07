import React from "react";
import TodoListItem from './todo_list_item.jsx';
import TodoForm from "./todo_form.jsx";

export const TodoList = (state)=>{
  // debugger;
  return (
    <div>
    <ul>
      {state.todos.map((todo) => (
        <TodoListItem todo = {todo} key = {todo.id} removeTodo = {state.removeTodo} receiveTodo = {state.receiveTodo}/>
      ))}
    </ul>
    <TodoForm receiveTodo = {state.receiveTodo}/>
    </div>
  );
};

// export default TodoList;
