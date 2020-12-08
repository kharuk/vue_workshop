<template>
  <div>
    <v-btn icon @click="editPost">
      <v-icon> mdi-pencil </v-icon>
    </v-btn>
    <v-btn icon @click="removePostRequest">
      <v-icon> mdi-delete </v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "PostActions",
  props: {
    id: String,
    hasRedirect: Boolean,
  },

  methods: {
    ...mapActions(["removePost", "setEditMode", "sesModalMode"]),
    removePostRequest() {
      this.removePost({ id: this.id, hasRedirect: this.hasRedirect });
    },
    editPost() {
      this.setEditMode(this.id);
      this.sesModalMode(true);
    },
  },
};
</script>
