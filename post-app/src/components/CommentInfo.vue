<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title v-text="comment.name"></v-list-item-title>
        <v-list-item-subtitle v-text="comment.body"></v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-list-item-action-text
          v-text="comment.email"
        ></v-list-item-action-text>

        <!-- <v-icon v-if="!active" color="grey lighten-1">
          mdi-heart-outline
        </v-icon>

        <v-icon v-else color="red darken-3"> mdi-heart </v-icon> -->
      </v-list-item-action>
    </v-list-item>
    <v-divider v-if="!last"></v-divider>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    comment: Object,
    last: Boolean,
  },
};
</script>