<template>
  <v-card :loading="loading">
    <v-toolbar color="white" flat>
      <v-btn href="/" icon>
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-toolbar-title class="title">
        Login to Manager
      </v-toolbar-title>
    </v-toolbar>

    <ValidationObserver ref="form" v-slot="{ invalid }">
      <v-form ref="login" method="post" action="/login">
        <input type="hidden" name="_token" :value="$csrf">

        <v-card-text>
          <ValidationProvider name="email" v-slot="{ errors }">
            <v-text-field
              v-model="auth.email"
              :error-messages="errors"
              @keypress.enter.prevent="submit"
              prepend-inner-icon="mdi-account-check-outline"
              label="Email"
              name="email"
              persistent-hint
              autofocus
              outlined
            />
          </ValidationProvider>

          <ValidationProvider name="password" v-slot="{ errors }">
            <v-text-field
              v-model="auth.password"
              :error-messages="errors"
              @click:append="show = !show"
              @keypress.enter.prevent="submit"
              :append-icon="icon"
              :type="type"
              prepend-inner-icon="mdi-lock-outline"
              label="Password"
              name="password"
              outlined
            />
          </ValidationProvider>

          <ValidationProvider name="remember" v-slot="{ errors }">
            <v-checkbox
              v-model="auth.remember"
              :error-messages="errors"
              :false-value="null"
              :true-value="1"
              autocomplete="off"
              label="Remember Me?"
              type="checkbox"
              color="primary"
              name="remember"
            />
          </ValidationProvider>
        </v-card-text>

        <v-card-actions>
          <v-btn href="/register" color="primary" text>
            Create Account
          </v-btn>

          <v-spacer/>

          <v-btn :disabled="invalid" color="primary" @click="submit">
            Login
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

export default {
  name: "Login",
  layout: AuthLayout,
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    loading: false,
    show: false,
    auth: {
      email: '',
      password: ''
    },
  }),
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
