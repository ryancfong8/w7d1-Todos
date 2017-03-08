export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
import * as APIUtil from "../utils/todo_api_util.js";
import { receiveErrors } from "./error_actions.js";

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo
});

export const fetchTodos = () => dispatch => (
  APIUtil.requestTodos().then(todos => dispatch(receiveTodos(todos)))
);

// export const createTodo = (todo) => dispatch => (
//   APIUtil.createTodo(todo).then(newTodo => dispatch(receiveTodo(newTodo)))
// );
export function createTodo(todo) {
  return (dispatch) => {
    return APIUtil.createTodo(todo)
      .then(newTodo => dispatch(receiveTodo(newTodo)),
            err => dispatch(receiveErrors(err.responseJSON)));
  };
}

export function updateTodo(todo) {
  return (dispatch) => {
    return APIUtil.updateTodo(todo)
      .then(newTodo => dispatch(receiveTodo(newTodo)),
            err => dispatch(receiveErrors(err.responseJSON)));
  };
}

export function deleteTodo(todo) {
  return (dispatch) => {
    return APIUtil.deleteTodo(todo)
      .then(newTodo => dispatch(removeTodo(newTodo)));
  };
}
