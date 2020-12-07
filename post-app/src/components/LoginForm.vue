
<template>
  <div class="login__wrapper">
    <h1>Welcome Back</h1>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit" class="form__wrapper">
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
        <p v-if="isLoginError" class="errorMessage">{{ $t("login.error") }}</p>
        <div class="button__wrapper">
          <v-btn class="mr-4" type="submit" :disabled="invalid">
            {{ $t("form.login") }}
          </v-btn>
          <v-btn class="mr-4" text @click="$emit('toggleForm')">
            {{ $t("login.signupLink") }}
          </v-btn>
        </div>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import { required, email } from "vee-validate/dist/rules";
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import { mapActions, mapGetters } from "vuex";

/* import { localize } from "vee-validate";

localize({
  en: {
    messages: {
      required: "{_field_} can not be empty",
      max: (_, { length }) =>
        `{_field_} may not be greater than ${length} characters`,
    },
  },
  ru: {
    messages: {
      required: "{_field_} не может быть пустым",
      max: (_, { length }) =>
        `{_field_} должно иметь не более ${length} символов`,
    },
  },
}); */

extend("required", {
  ...required,
  message: `{_field_} can not be empty`,
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  name: "LoginForm",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    email: "",
    password: "",
  }),
  computed: {
    ...mapGetters(["isLoginError"]),
  },
  methods: {
    ...mapActions(["login"]),
    submit() {
      this.$refs.observer.validate();
      this.login({ email: this.email, password: this.password });
    },
  },
};
</script>
