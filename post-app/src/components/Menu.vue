<template>
  <v-card class="mx-auto" height="100%">
    <v-navigation-drawer width="100%" permanent>
      <v-list nav>
        <v-list-item>
          <v-list-item-content> <LanguageSelect /> </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/">
          <v-list-item-content>
            <v-list-item-title> {{ $t("menu.home") }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/posts">
          <v-list-item-content>
            <v-list-item-title> {{ $t("menu.posts") }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="logout">
          <v-list-item-content>
            <v-list-item-title> {{ $t("menu.logout") }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
import LanguageSelect from "./LanguageSelect";

export default {
  name: "Menu",
  components: {
    LanguageSelect,
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>
