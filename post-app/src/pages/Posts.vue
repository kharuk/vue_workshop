<template>
  <div>
    <div class="action__panel">
      <h2>{{ $t("title.posts") }}</h2>
      <v-btn class="button" color="primary" @click="sesModalMode(true)">{{
        $t("posts.create")
      }}</v-btn>
    </div>
    <div class="panel__wrapper">
      <SearchField v-model="query" />
      <PostFilterField />
    </div>
    <PostList :query="query" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PostList from "../components/PostList";
import SearchField from "../components/actions-panel/SearchField";
import PostFilterField from "../components/actions-panel/PostFilterField";

export default {
  name: "Posts",
  components: { PostList, SearchField, PostFilterField },
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