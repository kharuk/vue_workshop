<template>
  <div>
    <div class="action__panel">
      <h2>Posts</h2>
      <v-btn class="button" color="primary" @click="sesModalMode(true)">{{
        $t("posts.create")
      }}</v-btn>
    </div>
    <div class="panel__wrapper">
      <SearchField v-model="query" />
      <SelectField />
    </div>
    <PostList :query="query" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PostList from "../PostList";
import SearchField from "../SearchField";
import SelectField from "../SelectField";

export default {
  name: "Posts",
  components: { PostList, SearchField, SelectField },
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