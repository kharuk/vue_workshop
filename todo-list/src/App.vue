<template>
  <div id="app" class="wrapper">
    <h1 class="title">TODO LIST</h1>
    <CreateField
      :filteredItemsCount="filteredItemsCount"
      @addTodo="addTodo"
      v-model="query"
      class="input__create"
    />
    <ul class="todos__wrapper">
      <transition-group name="fade-transition">
        <TodoItem
          is="TodoItem"
          v-for="todo in shownItems"
          :key="todo.id"
          :todo="todo"
          :editableTodo="editableTodo"
          class="todo__container"
          @removeTodo="removeTodo"
          @completeTodo="completeTask"
          @editTodo="editTodo"
          @saveEditedTodo="saveEditedTodo"
        >
          <template v-slot:urgent="{ todo }">
            <p
              :class="{
                urgent: todo.title.toLowerCase().includes('urgent'),
                completed: todo.completed,
                todo__content: true,
              }"
            >
              {{ todo.title }}
            </p>
          </template>
        </TodoItem>
      </transition-group>
    </ul>
    <Pagination v-model="page" :pageCount="pageSize" />
  </div>
</template>

<script>
import { getAll, addToDo, deleteToDo, editToDo, completeToDo } from './api';
import TodoItem from './components/TodoItem';
import CreateField from './components/CreateField';
import Pagination from './components/Pagination';

const PAGE_SIZE = 20;
export default {
  name: 'App',
  data() {
    return {
      items: [],
      query: '',
      editableTodo: null,
      newEditableTodo: '',
      page: 0,
    };
  },
  components: {
    TodoItem,
    CreateField,
    Pagination,
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
      return this.items.filter((item) =>
        item.title.toLowerCase().includes(this.query.toLowerCase())
      );
    },
    shownItems() {
      return this.filteredItems?.slice(this.startIndex, this.endIndex);
    },
    startIndex() {
      return this.page * PAGE_SIZE;
    },
    endIndex() {
      const index = this.startIndex + PAGE_SIZE;
      return index > this.itemsCount ? this.itemsCount : index;
    },
  },

  methods: {
    async addTodo(newTodo) {
      const transformedNewTodo = newTodo?.trim();
      if (!transformedNewTodo) {
        return;
      }
      const createdToDo = await addToDo(transformedNewTodo);
      this.query = '';
      this.items = [createdToDo, ...this.items];
    },

    async removeTodo(todoId) {
      await deleteToDo(todoId);
      this.items = this.items.filter(({ id }) => id !== todoId);
    },

    editTodo(id) {
      this.editableTodo = id;
    },

    async saveEditedTodo({ newEditableTodo: title, todoId: id }) {
      if (!title) {
        this.removeTodo(id);
      }
      const editedTodo = await editToDo(title, id);
      this.items = this.items.map((todo) =>
        todo.id !== id ? todo : editedTodo
      );
      this.editableTodo = null;
    },

    async completeTask(id, isCompleted) {
      const editedTodo = await completeToDo(id, isCompleted);
      this.items = this.items.filter((todo) =>
        todo.id !== id ? todo : editedTodo
      );
    },
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

.wrapper {
  width: 60%;
  max-width: 570px;
  margin: 70px auto 30px;
}

.input__create {
  flex-grow: 0.6;
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

.todo__content {
  margin-left: 10px;
  margin-bottom: 0;
}

.completed {
  text-decoration: line-through;
}

.urgent {
  color: red;
}

.fade-transition-enter-active,
.fade-transition-leave-active {
  transition: opacity 0.5s;
}

.fade-transition-enter,
.fade-transition-leave-to {
  opacity: 0;
}
</style>
