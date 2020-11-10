<template>
  <div id="app">
    <v-text-field
      label="What to do?"
      v-modal="task"
      :rules="rules"
      :append-icon="mdi - map - marker"
      @click:append="addTodo"
    >
      <v-icon>{{ icons.mdiAccount }}</v-icon>
    </v-text-field>
    <ul>
      <li v-for="(item, index) in items" :key="item.id">
        <h3>[#{{ index + 1 }}]</h3>
        <p>Title: {{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getAll } from './api';
import { mdiAccount } from '@mdi/js';

export default {
  name: 'App',
  data() {
    return {
      items: [],
      rules: [(value) => !!value || 'Required.'],
      task: '',
      icons: { mdiAccount },
    };
  },

  methods: {
    addTodo() {
      this.itmes = [this.task, ...this.items];
    },
  },

  async mounted() {
    this.items = await getAll();
  },
};
</script>
