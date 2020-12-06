<template>
  <div>
    <div class="action__panel">
      <h2>Posts</h2>
      <v-btn class="button" color="primary" @click="sesModalMode(true)">{{
        $t("posts.create")
      }}</v-btn>
    </div>
    <SearchField v-model="query" />
    <PostList :query="query" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PostList from "../PostList";
import SearchField from "../SearchField";

export default {
  name: "Posts",
  components: { PostList, SearchField },
  data() {
    return {
      query: "",
    };
  },
  methods: {
    ...mapActions(["loadPosts", "sesModalMode"]),
  },

  mounted() {
    this.loadPosts();
  },
};
</script>