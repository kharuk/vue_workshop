<template>
  <div class="field__wrapper">
    <v-select :items="items" v-model="filter" :label="$t('filter')"></v-select>
  </div>
</template>

<script>
import { filterOptions } from "../constants/filterOptions";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SelectField",
  data() {
    return {
      items: [
        { text: "All", value: filterOptions.ALL },
        { text: "My posts", value: filterOptions.MY_POSTS },
      ],
      filter: this.defaultFilter ?? filterOptions.ALL,
    };
  },
  watch: {
    filter() {
      this.setFilter(this.filter);
    },
  },
  computed: {
    ...mapGetters(["filter: defaultFilter"]),
  },
  methods: {
    ...mapActions(["setFilter"]),
  },
};
</script>