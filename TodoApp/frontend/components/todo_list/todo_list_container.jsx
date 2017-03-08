import { connect } from 'react-redux';
import {TodoList} from './todo_list.jsx';
import {allTodos} from '../../reducers/selectors.js';
import {receiveTodo, removeTodo, fetchTodos, createTodo, updateTodo, deleteTodo} from '../../actions/todo_actions.js';
import {receiveErrors} from '../../actions/error_actions';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: receiveErrors(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  createTodo: (todo) => dispatch(createTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
