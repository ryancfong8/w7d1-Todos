export const requestTodos = () => {
    return $.ajax({ method: 'GET', url: 'api/todos' });
};

export const createTodo = (todo) => {
  // debugger
  return $.ajax({ method: 'POST', url: 'api/todos', data: {'todo': todo} });
};

export const updateTodo = (todo) => {
  return $.ajax({ method: 'PATCH', url: `api/todos/${todo.id}`, data: {'todo': todo}});
};

export const deleteTodo = (todo) => {
  return $.ajax({ method: 'DELETE', url: `api/todos/${todo.id}`});
};
