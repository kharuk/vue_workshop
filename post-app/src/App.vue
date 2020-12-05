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
  </v-app>
</template>

<script>
import Menu from "./components/Menu";

export default {
  name: "App",

  components: {
    Menu,
  },

  data: () => ({
    //
  }),
};
</script>
