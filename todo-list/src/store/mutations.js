export default {
  setTodos(state, list) {
    state.todos = list;
  },
  addTodo(state, createdToDo) {
    state.todos = [createdToDo, ...state.todos];
  },
  updateTodo(state, { id, editedTodo }) {
    state.todos = state.todos.map((todo) =>
      todo.id !== id ? todo : editedTodo
    );
  },
  removeTodo(state, todoId) {
    state.todos = state.todos.filter(({ id }) => id !== todoId);
  },
  completeTodo(state, { id, completedTodo }) {
    state.todos = state.todos.filter((todo) =>
      todo.id !== id ? todo : completedTodo
    );
  },
  editTodo(state, todoId) {
    state.editableTodo = todoId;
  },
};
