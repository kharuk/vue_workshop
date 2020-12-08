<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-subtitle v-text="comment.userName"></v-list-item-subtitle>
        <v-list-item-title v-text="comment.content"></v-list-item-title>
      </v-list-item-content>
      <v-list-item-action>
        <v-list-item-action-text>
          {{ comment.createdOn | formatDate }}
        </v-list-item-action-text>
      </v-list-item-action>
    </v-list-item>
    <v-divider v-if="!last"></v-divider>
  </div>
</template>

<script>
import DateAgoMixin from "../../mixins/dateAgoMixin";

export default {
  name: "PostItem",
  props: {
    comment: Object,
    last: Boolean,
  },
  mixins: [DateAgoMixin],
};
</script>