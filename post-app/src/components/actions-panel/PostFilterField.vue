<template>
  <div class="field__wrapper">
    <v-select
      :items="items"
      v-model="filter"
      :label="$t('form.filter')"
    ></v-select>
  </div>
</template>

<script>
import { filterOptions } from "../../constants/filterOptions";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PostFilterField",
  data() {
    return {
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
    items() {
      return [
        { text: this.$t("filter.all"), value: filterOptions.ALL },
        { text: this.$t("filter.my"), value: filterOptions.MY_POSTS },
      ];
    },
  },
  methods: {
    ...mapActions(["setFilter"]),
  },
};
</script>