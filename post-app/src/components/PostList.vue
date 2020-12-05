<template>
  <v-row justify="center">
    <v-col
      cols="12"
      :xl="2"
      :lg="3"
      :sm="6"
      v-for="item in posts"
      :key="item.id"
    >
      <PostCard :item="item" />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
import PostCard from "./PostCard";

export default {
  name: "PostList",
  components: { PostCard },
  computed: {
    ...mapGetters(["posts"]),
  },
};
</script>
