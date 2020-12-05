<template>
  <div>
    <h2>Posts</h2>
    <PostList />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PostList from "../PostList";

export default {
  name: "Posts",
  data() {
    return {};
  },
  components: { PostList },
  methods: {
    ...mapActions(["loadPosts"]),
  },
  mounted() {
    this.loadPosts();
  },
};
</script>
