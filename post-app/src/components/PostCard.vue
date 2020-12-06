<template>
  <transition name="fade">
    <v-card class="mx-auto">
      <v-img class="white--text align-end" height="200px" :src="img">
        <v-card-title>{{ item.title }}</v-card-title>
      </v-img>
      <PostActions :id="item.id" class="action-bar" />
      <v-card-subtitle class="pb-0">
        {{ item.createdOn | formatDate }}
      </v-card-subtitle>
      <v-card-text class="text--primary">
        <p class="text_dot">{{ item.body }}</p>
      </v-card-text>
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
import moment from "moment";
import PostActions from "./PostActions";
import PostStatistics from "./PostStatistics";

const DEFAULT_IMG = "https://cdn.vuetifyjs.com/images/cards/docks.jpg";
export default {
  name: "PostCard",
  props: {
    item: Object,
  },
  components: {
    PostActions,
    PostStatistics,
  },
  computed: {
    img() {
      return this.item.imgUrl || DEFAULT_IMG;
    },
  },
  filters: {
    formatDate(val) {
      if (!val) {
        return "-";
      }

      let date = val.toDate();
      return moment(date).fromNow();
    },
  },
};
</script>