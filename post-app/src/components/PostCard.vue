<template>
  <transition name="fade">
    <v-card class="mx-auto">
      <PostInfo :item="item" :isPreview="true" />
      <v-card-actions>
        <v-list-item class="grow list__wrapper">
          <router-link :to="`/posts/${item.id}`">
            <v-btn text color="teal accent-4" class="details__button">{{
              $t("posts.details")
            }}</v-btn>
          </router-link>

          <v-row align="center" justify="end">
            <PostStatistics :post="item" />
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </transition>
</template>

<script>
import PostStatistics from "./post-info/PostStatistics";
import PostInfo from "./post-info/PostInfo";

export default {
  name: "PostCard",
  props: {
    item: Object,
  },
  components: {
    PostStatistics,
    PostInfo,
  },
};
</script>