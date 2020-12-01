<template>
  <div class="field__wrapper">
    <div class="input__container">
      <input
        type="text"
        class="input w-100 d-block"
        v-model="newTodo"
        @input="$emit('input', newTodo)"
      />
      <img
        src="../assets/add.png"
        alt="add"
        width="20"
        height="25"
        @click="addTodo"
      />
    </div>
    <p>Totally {{ filteredItemsCount }} items found.</p>
  </div>
</template>

<script>
export default {
  name: 'CreateField',
  props: ['value', 'filteredItemsCount'],
  data() {
    return {
      newTodo: '',
    };
  },
  watch: {
    value() {
      this.newTodo = this.value;
    },
  },
  methods: {
    addTodo() {
      this.$emit('addTodo', this.newTodo);
    },
  },
};
</script>

<style>
.field__wrapper {
  margin-bottom: 30px;
}

.input__container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.input {
  border-bottom: 1px solid #808080bd;
  margin-bottom: 10px;
}

.input:focus {
  outline: none;
}
</style>
