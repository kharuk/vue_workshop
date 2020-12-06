<template>
  <div>
    <div class="wrapper">
      <div class="card" v-for="item in shownItems" :key="item.id">
        <PostCard :item="item" />
      </div>
    </div>
    <div class="pagination__wrapper">
      <v-pagination v-model="page" :length="pageSize" circle></v-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostCard from "./PostCard";
const PAGE_SIZE = 10;

export default {
  name: "PostList",
  props: {
    query: String,
  },
  data() {
    return {
      page: 1,
    };
  },
  components: { PostCard },
  computed: {
    ...mapGetters(["posts"]),
    filteredItemsCount() {
      return this.filteredItems.length;
    },
    itemsCount() {
      return this.posts.length;
    },
    pageSize() {
      return Math.ceil(this.filteredItemsCount / PAGE_SIZE);
    },
    filteredItems() {
      return this.posts.filter((item) =>
        item.title.toLowerCase().includes(this.query.toLowerCase())
      );
    },
    shownItems() {
      return this.filteredItems?.slice(this.startIndex, this.endIndex);
    },
    startIndex() {
      return (this.page - 1) * PAGE_SIZE;
    },
    endIndex() {
      const index = this.startIndex + PAGE_SIZE;
      return index > this.itemsCount ? this.itemsCount : index;
    },
  },
};
</script>
