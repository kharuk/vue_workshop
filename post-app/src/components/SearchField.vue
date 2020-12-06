<template>
  <div class="field__wrapper">
    <v-text-field
      :label="$t('form.label.search')"
      v-model="search"
      @input="$emit('input', search)"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "SearchField",
  props: {
    value: String,
  },
  data() {
    return {
      search: "",
    };
  },
  watch: {
    value() {
      this.search = this.value;
    },
  },
};
</script>