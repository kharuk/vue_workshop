import { getAll, addToDo, deleteToDo, editToDo, completeToDo } from '../api';

export default {
  async loadTodos(ctx) {
    const list = await getAll();
    ctx.commit('setTodos', list);
  },
  async addTodo(ctx, { newTodo }) {
    const createdToDo = await addToDo(newTodo);
    ctx.commit('addTodo', createdToDo);
  },
  async updateTodo(ctx, { title, id }) {
    console.log(title);
    const editedTodo = await editToDo(title, id);
    ctx.commit('updateTodo', { editedTodo, id });
  },
  async removeTodo(ctx, todoId) {
    await deleteToDo(todoId);
    ctx.commit('removeTodo', todoId);
  },
  async completeTodo(ctx, { id, isCompleted }) {
    const completedTodo = await completeToDo(id, isCompleted);
    ctx.commit('completeTodo', { completedTodo, id });
  },
  editTodo(ctx, id) {
    ctx.commit('editTodo', id);
  },
};
