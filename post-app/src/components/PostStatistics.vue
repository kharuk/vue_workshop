<template>
  <div>
    <v-btn icon @click="likePostRequest">
      <v-icon class="mr-1"> mdi-heart-outline </v-icon>
    </v-btn>
    <span class="subheading mr-2">{{ post.likes }}</span>
    <span class="mr-1">·</span>
    <v-icon class="mr-1"> mdi-comment-multiple-outline </v-icon>
    <span class="subheading">{{ post.comments }}</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "PostStatistics",
  props: {
    post: Object,
  },
  methods: {
    ...mapActions(["likePost"]),
    likePostRequest() {
      this.likePost({ id: this.post.id, likes: this.post.likes });
    },
  },
};
</script>
