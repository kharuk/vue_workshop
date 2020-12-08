<template>
  <v-app>
    <v-container fluid class="pa-0 page__container">
      <v-row no-gutters class="page__container">
        <v-col cols="2"><Menu /></v-col>
        <v-col cols="10" class="pa-3">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
    <PostModal :showPostModal="isModalOpen" />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Menu from "./components/Menu";
import PostModal from "./components/PostModal";

export default {
  name: "App",
  components: {
    Menu,
    PostModal,
  },
  computed: {
    ...mapGetters(["isModalOpen"]),
  },
};
</script>
