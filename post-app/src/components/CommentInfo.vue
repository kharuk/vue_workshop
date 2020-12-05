<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title v-html="comment.name"></v-list-item-title>
        <v-list-item-subtitle v-html="comment.body"></v-list-item-subtitle>
      </v-list-item-content>
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
<style>
</style>
