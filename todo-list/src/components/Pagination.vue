<template>
  <nav class="pagination_wrapper">
    <button
      class="pagination__button"
      :disabled="pageNumber === 0"
      @click="changePage(null, 'prev')"
    >
      Previous
    </button>
    <div class="pagination__number">{{ pageNumber + 1 }}</div>
    <button
      class="pagination__button"
      :disabled="pageNumber >= pageCount - 1"
      @click="changePage(null, 'next')"
    >
      Next
    </button>
  </nav>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    value: Number,
    pageCount: Number,
  },
  data() {
    return {
      pageNumber: this.value,
    };
  },
  watch: {
    value() {
      this.pageNumber = this.value;
    },
  },
  methods: {
    changePage(event, mode) {
      if (mode === 'next') {
        this.pageNumber++;
      }
      if (mode === 'prev') {
        this.pageNumber--;
      }
      this.$emit('input', this.pageNumber);
    },
  },
};
</script>

<style scoped>
.pagination_wrapper {
  display: flex;
}

.pagination__number {
  margin: 0px 10px;
  font-weight: 900;
}

.pagination__button:focus {
  outline: none;
}
</style>
