<template>
  <v-card class="mx-auto auth__container" max-width="800" outlined>
    <LoginForm v-if="showLoginForm" @toggleForm="toggleForm" />
    <SignupForm v-else @toggleForm="toggleForm" />
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
import LoginForm from "../components/authentification/LoginForm";
import SignupForm from "../components/authentification/SignupForm";

export default {
  components: {
    LoginForm,
    SignupForm,
  },
  data() {
    return {
      showLoginForm: true,
    };
  },
  methods: {
    ...mapActions(["resetErrors"]),
    toggleForm() {
      this.showLoginForm = !this.showLoginForm;
      this.resetErrors();
    },

    signup() {
      this.$store.dispatch("signup", {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        title: this.signupForm.title,
      });
    },
  },
};
</script>
