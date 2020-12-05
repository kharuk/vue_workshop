<template>
  <v-card>
    <v-card-title class="d-block">
      <h4 class="text-center title">{{ item.title }}</h4>
    </v-card-title>

    <v-card-text>
      <p class="text_dot">{{ item.body }}</p>
    </v-card-text>
    <v-card-actions>
      <router-link :to="`/posts/${item.id}`">
        <v-btn text color="teal accent-4">{{ $t("posts.details") }}</v-btn>
      </router-link>
    </v-card-actions>
    <!--  <v-text-field v-model="query" />
    <v-row class="users-list">
      <v-col cols="2" v-for="user in visibleList" :key="user.id">
        <v-card>
          <v-card-title>
            <h4>{{ user.name }}  </h4>
          </v-card-title>
          <v-card-subtitle>
            <p><small> {{user.jobTitle}}</small></p>
          </v-card-subtitle>
          <v-card-actions>
            <router-link :to="`/users/${user.id}`">
              <v-btn text>Details</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row> -->
  </v-card>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    item: Object,
  },
};
</script>
<style>
.text_dot {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}

.title {
  line-height: 26px;
}

a {
  text-decoration: none;
}
</style>
