<template>
  <div>
    <h3>Post</h3>
    <PostItem :id="this.$route.params.id" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PostItem from "../PostItem";

export default {
  name: "Post",
  data() {
    return {};
  },
  components: { PostItem },
  methods: {
    ...mapActions(["loadCommentsForPost", "loadPostById", "restPost"]),
  },
  mounted() {
    this.loadPostById(this.$route.params.id);
    this.loadCommentsForPost(this.$route.params.id);
  },
  destroyed() {
    this.restPost();
  },
};
</script>