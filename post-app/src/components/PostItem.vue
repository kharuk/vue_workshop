<template>
  <v-card class="mx-auto" v-if="post">
    <v-card-title class="d-block">
      <h4 class="text-center title">{{ post.title }}</h4>
      <v-spacer></v-spacer>
      <PostActions :id="post.id" :hasRedirect="true" />
    </v-card-title>

    <v-card-text>
      <p>{{ post.body }}</p>
    </v-card-text>
    <v-list two-line>
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
import PostActions from "./PostActions";

export default {
  name: "PostItem",
  props: {
    id: String,
  },
  components: {
    CommentInfo,
    PostActions,
  },
  computed: {
    ...mapGetters(["comments", "post"]),
  },
};
</script>