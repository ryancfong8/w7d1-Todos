import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions";
import merge from 'lodash/merge';


const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_TODOS:
      // nextState = merge({}, state, action.todos);
      // nextState = merge({}, action.todos);
      nextState = {};
      action.todos.forEach(todo => (nextState[todo.id] = todo));
      return nextState;
    case RECEIVE_TODO:
      // debugger
      nextState = merge({}, state, {[action.todo.id]: action.todo});
      return nextState;
    case REMOVE_TODO:
    console.log("Hit Remove Todo");
    // debugger
      nextState = merge({}, state);
      delete nextState[action.todo.id];
      return nextState;
    default:
      return state;
  }
};

export default todosReducer;
