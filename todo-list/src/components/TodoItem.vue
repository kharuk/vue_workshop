<template>
  <li>
    <div class="todo__row">
      <v-checkbox
        color="indigo"
        hide-details
        v-show="editableTodo !== todo.id"
        v-model="todo.completed"
        @click="completeTodo({ id: todo.id, isCompleted: todo.completed })"
        class="v-checkbox"
      ></v-checkbox>
      <v-text-field
        v-if="editableTodo === todo.id"
        v-model="newEditableTodo"
        :rules="rules"
      ></v-text-field>
      <slot v-else name="urgent" :todo="todo"> </slot>
    </div>

    <div class="button__wrapper">
      <v-btn
        icon
        @click="
          editableTodo === todo.id
            ? onSaveEditedTodo(newEditableTodo, todo.id)
            : onEditTodo()
        "
      >
        <v-icon>{{
          editableTodo === todo.id ? 'mdi-pencil' : 'mdi-check'
        }}</v-icon>
      </v-btn>
      <v-btn icon @click="removeTodo(todo.id)">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </div>
  </li>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'TodoItem',
  props: ['todo'],
  data() {
    return {
      newEditableTodo: '',
    };
  },
  computed: {
    ...mapGetters(['editableTodo']),
  },
  methods: {
    ...mapActions(['removeTodo', 'completeTodo', 'updateTodo', 'editTodo']),
    onEditTodo() {
      this.newEditableTodo = this.todo?.title;
      this.editTodo(this.todo?.id);
    },
    onSaveEditedTodo(newEditableTodo, todoId) {
      if (!newEditableTodo) {
        this.removeTodo(todoId);
      }
      this.updateTodo({ title: newEditableTodo, id: todoId });
      this.editTodo(null);
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

.v-checkbox {
  margin-top: 0;
}
</style>
