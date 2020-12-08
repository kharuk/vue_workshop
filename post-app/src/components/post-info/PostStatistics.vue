<template>
  <div>
    <v-btn icon @click="likePostRequest">
      <v-icon class="mr-1">
        {{ isLiked ? "mdi-heart" : "mdi-heart-outline" }}
      </v-icon>
    </v-btn>
    <span class="subheading mr-2">{{ post.likes }}</span>
    <span class="mr-1">·</span>
    <v-icon class="mr-1"> mdi-comment-multiple-outline </v-icon>
    <span class="subheading">{{ post.comments }}</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PostStatistics",
  props: {
    post: Object,
  },
  computed: {
    ...mapGetters(["isPostLiked"]),
    isLiked() {
      return this.isPostLiked(this.post.id);
    },
  },
  methods: {
    ...mapActions(["likePost"]),
    likePostRequest() {
      this.likePost({ id: this.post.id, likes: this.post.likes });
    },
  },
};
</script>
