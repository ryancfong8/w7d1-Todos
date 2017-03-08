import React from "react";
import TodoListItem from './todo_list_item.jsx';
import TodoForm from "./todo_form.jsx";

// export const TodoList = (state)=>{
//   // debugger;
//   return (
//     <div>
//     <ul>
//       {state.todos.map((todo) => (
//         <TodoListItem todo = {todo} key = {todo.id} removeTodo = {state.removeTodo} receiveTodo = {state.receiveTodo}/>
//       ))}
//     </ul>
//     <TodoForm receiveTodo = {state.receiveTodo}/>
//     </div>
//   );
// };

export class TodoList extends React.Component{
  // debugger;
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // debugger
    this.props.fetchTodos();
  }

  render (){
    // debugger
    return (
      <div>
      <ul>
        {this.props.todos.map((todo, id) => (
          <TodoListItem todo = {todo} key = {id} removeTodo = {this.props.removeTodo} receiveTodo = {this.props.receiveTodo} updateTodo = {this.props.updateTodo} deleteTodo = {this.props.deleteTodo}/>
        ))}
      </ul>
      <TodoForm errors = {this.props.errors.errors.errors} receiveTodo = {this.props.receiveTodo} createTodo = {this.props.createTodo}/>
      </div>
    );
  }
}

// export default TodoList;
