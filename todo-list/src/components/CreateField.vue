<template>
  <div class="field__wrapper">
    <div class="input__container">
      <v-text-field
        :label="$t('form.newTodoPlaceholder')"
        v-model="newTodo"
        @input="$emit('input', newTodo)"
        :rules="rules"
        append-icon="mdi-plus"
        @click:append="addTodo"
      ></v-text-field>
    </div>
    <p>
      {{ $t('app.foundItems') }} {{ filteredItemsCount }}
      {{ $tc('app.items', filteredItemsCount) }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'CreateField',
  props: ['value', 'filteredItemsCount'],
  data() {
    return {
      newTodo: '',
      rules: [(value) => !!value || "$t('form.required')"],
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
  width: 100%;
  padding: 5px;
}

.input:focus {
  outline: none;
}
</style>
