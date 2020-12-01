<template>
  <li>
    <div class="todo__row">
      <input
        type="checkbox"
        v-show="editableTodo !== todo.id"
        v-model="todo.completed"
        @click="onCompleteTask(todo.id, todo.completed)"
      />
      <input
        type="text"
        class="d-block w-100"
        v-if="editableTodo === todo.id"
        v-model="newEditableTodo"
      />
      <slot v-else name="urgent" :todo="todo"> </slot>
    </div>

    <div class="button__wrapper">
      <button
        type="button"
        class="button"
        @click="
          editableTodo === todo.id
            ? onSaveEditedTodo(newEditableTodo, todo.id)
            : onEditTodo()
        "
      >
        <img
          src="../assets/save.png"
          alt="save"
          width="20"
          v-if="editableTodo === todo.id"
        />
        <img src="../assets/edit.png" alt="edit" width="20" v-else />
      </button>
      <button type="button" class="button" @click="onRemoveTodo(todo.id)">
        <img src="../assets/delete.png" alt="trash" width="20" />
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo', 'editableTodo'],
  data() {
    return {
      newEditableTodo: '',
    };
  },
  methods: {
    onCompleteTask(id, completed) {
      this.$emit('completeTodo', { id, completed });
    },
    onRemoveTodo(id) {
      this.$emit('removeTodo', id);
    },
    onEditTodo() {
      this.newEditableTodo = this.todo?.title;
      this.$emit('editTodo', this.todo?.id);
    },
    onSaveEditedTodo(newEditableTodo, todoId) {
      this.$emit('saveEditedTodo', { newEditableTodo, todoId });
    },
  },
};
</script>

<style>
.todo__row {
  display: flex;
  align-items: center;
  flex: 1;
}

.button__wrapper {
  width: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button:focus {
  outline: none;
}
</style>
