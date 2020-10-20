<template>
  <v-card :loading="loading">
    <v-toolbar color="white" flat>
      <v-btn href="/" icon>
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-toolbar-title class="title">
        Sign Up to Manager
      </v-toolbar-title>
    </v-toolbar>

    <ValidationObserver ref="form" v-slot="{ invalid }">
      <v-form ref="login" method="post" action="/register">
        <input type="hidden" name="_token" :value="$csrf">

        <v-card-text>
          <ValidationProvider name="name" v-slot="{ errors }">
            <v-text-field
              v-model="auth.name"
              :error-messages="errors"
              label="Name"
              name="name"
              autofocus
              outlined
            />
          </ValidationProvider>

          <ValidationProvider name="email" v-slot="{ errors }">
            <v-text-field
              v-model="auth.email"
              :error-messages="errors"
              prepend-inner-icon="mdi-account-check-outline"
              label="Email"
              name="email"
              outlined
            />
            <input v-model="auth.email" type="hidden" name="email">
          </ValidationProvider>

          <ValidationProvider name="password" v-slot="{ errors }">
            <v-text-field
              v-model="auth.password"
              :error-messages="errors"
              @click:append="show = !show"
              :append-icon="icon"
              :type="type"
              prepend-inner-icon="mdi-lock-outline"
              label="Password"
              name="password"
              outlined
            />
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors }" vid="confirmation">
            <v-text-field
              v-model="auth.password_confirmation"
              :error-messages="errors"
              prepend-inner-icon="mdi-lock-outline"
              label="confirm password"
              name="password_confirmation"
              type="password"
              outlined
            />
          </ValidationProvider>
        </v-card-text>

        <v-card-actions>
          <v-btn href="/login" color="primary" text>
            Already has an account?
          </v-btn>

          <v-spacer/>

          <v-btn :disabled="invalid" color="primary" depressed @click="submit">
            Register
          </v-btn>
        </v-card-actions>
      </v-form>
    </ValidationObserver>
  </v-card>
</template>

<script>
import AuthLayout from "../../Layouts/Auth";
import { isEmpty, omit } from "lodash";
import { ValidationObserver, ValidationProvider } from "vee-validate";

const auth = {
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
};

export default {
  name: "Register",
  layout: AuthLayout,
  components: {
    ValidationObserver,
    ValidationProvider
  },
  props: {
    errors: {
      default: () => ({}),
      required: true,
      type: Object
    },
    inputs: {
      default: () => ({}),
      required: false,
      type: Object
    },
  },
  data: () => ({
    loading: false,
    show: false,
    auth: { ...auth },
  }),
  methods: {
    submit() {
      this.loading = 'primary';
      this.$refs.form.validate()
        .then(valid => valid ? this.$refs.login.$el.submit(): undefined)
        .finally(() => this.loading = false);
    }
  },
  computed: {
    type() {
      return this.show ? 'text' : 'password';
    },
    icon() {
      return this.show ? 'mdi-eye-off' : 'mdi-eye';
    },
  },
  mounted() {
     if (!isEmpty(this.inputs)) this.auth = { ...omit(this.inputs, ['_token']) };

    if (!isEmpty(this.errors)) 
      this.$nextTick(() => this.$refs.form.setErrors(this.errors));
  }
}
</script>

<style scoped>

</style>
