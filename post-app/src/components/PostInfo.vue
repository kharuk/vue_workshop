<template>
  <div>
    <v-img
      class="white--text align-end"
      :height="isPreview ? '200px' : '400px'"
      :src="img"
    >
      <v-card-title>{{ item.title }}</v-card-title>
    </v-img>
    <PostActions :id="item.id" class="action-bar" />
    <v-card-subtitle class="pb-0">
      {{ item.createdOn | formatDate }}
    </v-card-subtitle>
    <v-card-text class="text--primary">
      <p :class="{ text_dot: isPreview }">{{ item.body }}</p>
    </v-card-text>
  </div>
</template>

<script>
import moment from "moment";
import PostActions from "./PostActions";

const DEFAULT_IMG = "https://cdn.vuetifyjs.com/images/cards/docks.jpg";

export default {
  name: "PostInfo",
  props: {
    item: Object,
    isPreview: Boolean,
  },
  components: {
    PostActions,
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
