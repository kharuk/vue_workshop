<template>
  <v-app>
    <v-container fluid class="pa-0">
      <v-row no-gutters>
        <v-col cols="2"><Menu /></v-col>
        <v-col cols="10" class="pa-3">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
    <PostModal :showPostModal="isModalOpen" @closePostModal="closeModal" />
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Menu from "./components/Menu";
import PostModal from "./components/PostModal";

export default {
  name: "App",

  components: {
    Menu,
    PostModal,
  },

  data: () => ({
    //
  }),
  computed: {
    ...mapGetters(["isModalOpen"]),
  },
  methods: {
    ...mapActions(["sesModalMode"]),

    closeModal() {
      this.sesModalMode(false);
    },
  },
};
</script>
