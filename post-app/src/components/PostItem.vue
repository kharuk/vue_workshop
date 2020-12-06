<template>
  <v-card class="mx-auto card__item" v-if="post">
    <PostInfo :item="post" />
    <v-divider></v-divider>
    <div class="statistics__wrapper">
      <PostStatistics :post="post" />
    </div>
    <p class="comments__title">{{ $t("posts.comments") }}</p>
    <div class="comment-new__wrapper">
      <CommentCreation :postId="post.id" />
    </div>
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
import PostInfo from "./PostInfo";
import PostStatistics from "./PostStatistics";
import CommentCreation from "./CommentCreation";

export default {
  name: "PostItem",
  props: {
    id: String,
  },
  components: {
    CommentInfo,
    PostInfo,
    PostStatistics,
    CommentCreation,
  },
  computed: {
    ...mapGetters(["comments", "post"]),
  },
};
</script>