import React from "react";
import TodoListItem from './todo_list_item.jsx';

export const TodoList = (state)=>{
  // debugger;
  return (
    <ul>
      {state.todos.map((todo, i) => (
        <TodoListItem todo = {todo} />
      ))}
    </ul>
  );
};

// export default TodoList;
