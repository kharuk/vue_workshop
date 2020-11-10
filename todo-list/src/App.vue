<template>
  <div id="app" class="wrapper">
    <h1 class="title">TODO LIST</h1>
    <div class="input__container">
      <v-text-field
        label="What to do?"
        v-model="newTodo"
        :rules="rules"
        append-icon="mdi-plus"
        @click:append="addTodo"
      >
      </v-text-field>
       <p>Totally {{filteredItemsCount}} items found.</p>
    </div>
    <ul class="todos__wrapper">
      <li v-for="todo in shownItems" :key="todo.id" class="todo__container">
        <div class="todo__row">
        <v-checkbox
          color="indigo"
          hide-details
          v-show="editableTodo !== todo.id" 
          v-model="todo.completed"  
          @click="completeTask(todo.id, todo.completed)"
          class="v-checkbox"
        ></v-checkbox>
        <v-text-field
          v-if="editableTodo === todo.id" 
          v-model="newEditableTodo"
          :rules="rules"
        >
        </v-text-field>
        <p v-else class="todo__content" :class="{ completed: todo.completed}">{{ todo.title }}</p>
        </div>
        
        <div class="button__wrapper">
           <v-btn
            icon
            @click="editableTodo === todo.id ? saveEditedTodo(newEditableTodo, todo.id) : editTodo(todo)"
          >
            <v-icon>{{ editableTodo === todo.id ? 'mdi-pencil' : 'mdi-check' }}</v-icon>
          </v-btn>
          <v-btn
            icon
            @click="removeTodo(todo.id)" 
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
      </li>
    </ul>
    <v-pagination
      v-model="page"
      :length="pageSize"
      circle
    ></v-pagination>
  </div>
</template>

<script>
import { getAll, addToDo, deleteToDo, editToDo, completeToDo } from './api';
const PAGE_SIZE = 20;
export default {
  name: 'App',
  data() {
    return {
      items: [],
      rules: [(value) => !!value || 'Required.'],
      newTodo: '',
      editableTodo: null,
      newEditableTodo: '',
      page: 0,
    };
  },


  computed: {
    filteredItemsCount() {
      return this.filteredItems.length;
    },
    itemsCount() {
      return this.items.length;
    },
    pageSize() {
      return Math.ceil(this.filteredItemsCount / PAGE_SIZE) - 1;
    },
    filteredItems() {
      return this.items.filter((item) => item.title.toLowerCase().includes(this.newTodo.toLowerCase()))
    },
    shownItems() {
      const startIndex = this.page * PAGE_SIZE
      const endIndex = this.getEndIndex(startIndex)
      return this.filteredItems?.slice(startIndex, endIndex);
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

    async completeTask(id, isCompleted) {
      const editedTodo = await completeToDo(id, isCompleted);
      this.items = this.items.filter((todo)=> todo.id !== id ? todo : editedTodo)
    },

    getEndIndex(startIndex) {
      const index = startIndex + PAGE_SIZE;
      return index > this.itemsCount ? this.itemsCount : index;
    } 
  },

  async mounted() {
    this.items = await getAll();
  },
};
</script>
<style>

  .title {
    text-align: center;
  }

  .wrapper{
    width: 60%;
    max-width: 570px;
    margin: 70px auto 30px;
  }

  .input__container {
    margin-bottom: 30px;
  }

  .todos__wrapper {
    margin-bottom: 20px;
  }

  .todo__container {
    display: flex;
    justify-content: space-between;
    padding: 4px 0;
    border-bottom: 1px solid #80808024;
  }
  .todo__container:last-child {
    border-bottom: none;
  }

  .todo__row {
    display: flex;
    align-items: center;
    flex: 1;
  }

  .todo__content {
    margin-left: 10px;
  }

  .completed {
    text-decoration: line-through;
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
