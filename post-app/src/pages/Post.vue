<template>
  <div>
    <h3>{{ $t("title.post") }}</h3>
    <PostItem :id="this.$route.params.id" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PostItem from "../components/PostItem";

export default {
  name: "Post",
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