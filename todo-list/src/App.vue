<template>
  <div id="app">
    <div class="input__container">
      <v-text-field
        label="What to do?"
        v-model="newTodo"
        :rules="rules"
        append-icon="mdi-plus"
        @click:append="addTodo"
      >
      </v-text-field>
       <p>Totally {{itemsCount}} items found.</p>
    </div>
    <ul class="todos__wrapper">
      <li v-for="todo in filteredItems" :key="todo.id" class="todo__container">
        <v-text-field
          v-if="editableTodo === todo.id" 
          v-model="newEditableTodo"
          :rules="rules"
        >
        </v-text-field>
        <p v-else>Title: {{ todo.title }}</p>
         
      
        <div class="button__wrapper">
        <button @click="editableTodo === todo.id ? saveEditedTodo(newEditableTodo, todo.id) : editTodo(todo)">{{ editableTodo === todo.id ? 'done' : 'edit' }}</button>
        <button @click="removeTodo(todo.id)">remove</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getAll, addToDo, deleteToDo, editToDo } from './api';

export default {
  name: 'App',
  data() {
    return {
      items: [],
      rules: [(value) => !!value || 'Required.'],
      newTodo: '',
      editableTodo: null,
      newEditableTodo: '',
    };
  },


  computed: {
    itemsCount() {
      return this.filteredItems.length;
    },
    filteredItems() {
      return this.items.filter((item) => item.title.toLowerCase().includes(this.newTodo.toLowerCase()));
    }
  },

  methods: {
    async addTodo() {
      const newTodo = this.newTodo && this.newTodo.trim();
      if (!newTodo) {
        return
      }
      const createdToDo = await addToDo(newTodo)
      this.newTodo = ''
      this.items = [createdToDo, ...this.items];
    },

    async removeTodo(todoId) {
      await deleteToDo(todoId)
      this.items = this.items.filter(({id})=> id !== todoId)
    },
  
    editTodo({id, title}) {
      this.editableTodo = id
      this.newEditableTodo = title
    },

    async saveEditedTodo(title, id) {
      if (!title) {
        this.removeTodo(id)
      }
      const editedTodo = await editToDo(title, id);
      this.items = this.items.filter((todo)=> todo.id !== id ? todo : editedTodo)
      this.editableTodo =  null
    },
  },

  async mounted() {
    this.items = await getAll();
  },
};
</script>
<style>

.input__container {
  width: 60%;
  margin: 0 auto;
}

.todos__wrapper {
  width: 70%;
  margin: 0 auto;
}

.todo__container {
  display: flex;
  justify-content: space-between;
}

.button__wrapper {
  width: 100px;
  display: flex;
  justify-content: space-between;
}

</style>
