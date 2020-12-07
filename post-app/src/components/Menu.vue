<template>
  <v-card class="mx-auto" height="100%">
    <v-navigation-drawer width="100%" permanent>
      <v-list nav>
        <v-list-item link to="/">
          <v-list-item-content>
            <v-list-item-title> Home </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/posts">
          <v-list-item-content>
            <v-list-item-title> Posts </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="logout">
          <v-list-item-content>
            <v-list-item-title> Logout </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Menu",
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>
