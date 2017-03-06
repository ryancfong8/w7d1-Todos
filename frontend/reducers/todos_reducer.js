import { RECEIVE_TODO, RECEIVE_TODOS } from "../actions/todo_actions";
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

const todosReducer = (state = initialState, action) => {
  let nextState = null;
  switch(action.type) {
    case RECEIVE_TODOS:
      nextState = merge(state, action.todos);
      return nextState;
    case RECEIVE_TODO:
      nextState = merge(state, action.todo);
      return nextState;
    default:
      return state;
  }
};

export default todosReducer;
