export const allTodos = ({ todos }) => {
    return Object.keys(todos).map(id => todos[id]);
};
// export const allTodos = (state) => {
//     return Object.keys(state.todos).map(id => state.todos[id]);
// };
