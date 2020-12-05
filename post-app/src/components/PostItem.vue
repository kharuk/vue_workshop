<template>
  <v-card class="mx-auto" v-if="post">
    <v-card-title class="d-block">
      <h4 class="text-center title">{{ post.title }}</h4>
    </v-card-title>

    <v-card-text>
      <p>{{ post.body }}</p>
    </v-card-text>
    <v-list three-line>
      <template v-for="(comment, index) in comments">
        <CommentInfo
          :comment="comment"
          :last="index === comments.length - 1"
          :key="comment.id"
        />
      </template>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import CommentInfo from "./CommentInfo";

export default {
  name: "PostItem",
  props: {
    id: String,
  },
  components: {
    CommentInfo,
  },
  computed: {
    ...mapGetters(["comments", "post"]),
  },
};
</script>
<style>
</style>
