<template>
  <div class="field__wrapper">
    <div class="input__container">
      <v-text-field
        :label="$t('form.label.newComment')"
        v-model="comment"
        append-icon="mdi-plus"
        @click:append="addCommentRequest"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CommentCreation",
  props: {
    postId: String,
  },
  data() {
    return {
      comment: "",
    };
  },
  methods: {
    ...mapActions(["addComment"]),
    addCommentRequest() {
      this.addComment({
        postId: this.postId,
        comment: this.comment,
      });
      this.comment = "";
    },
  },
};
</script>