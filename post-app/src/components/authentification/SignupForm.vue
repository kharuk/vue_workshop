
<template>
  <div class="login__wrapper">
    <h1>{{ $t("login.signupTitle") }}</h1>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit" class="form__wrapper">
        <validation-provider v-slot="{ errors }" name="name" rules="required">
          <v-text-field
            v-model="name"
            :error-messages="errors"
            :label="$t('form.label.name')"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
        >
          <v-text-field
            v-model="email"
            :error-messages="errors"
            :label="$t('form.label.email')"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="password"
          rules="required"
        >
          <v-text-field
            v-model="password"
            :error-messages="errors"
            :label="$t('form.label.password')"
            required
            :type="'password'"
          ></v-text-field>
        </validation-provider>

        <div class="button__wrapper">
          <v-btn class="mr-4" type="submit" :disabled="invalid">
            {{ $t("form.signup") }}
          </v-btn>
          <v-btn class="mr-4" text @click="$emit('toggleForm')">
            {{ $t("login.loginLink") }}
          </v-btn>
        </div>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { mapActions } from "vuex";

export default {
  name: "SignupForm",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    email: "",
    password: "",
    name: "",
  }),

  methods: {
    ...mapActions(["signup"]),
    submit() {
      this.$refs.observer.validate();
      this.signup({
        email: this.email,
        password: this.password,
        name: this.name,
      });
    },
  },
};
</script>
