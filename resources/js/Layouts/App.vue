<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>
        <a href="/" class="text-decoration-none">Manager</a>
      </v-toolbar-title>

      <v-spacer/>

      <v-form action="/logout" method="post" ref="logout">
        <input type="hidden" name="_token" :value="$csrf">
        <v-btn text icon @click="$refs.logout.$el.submit()">
          <v-icon>mdi-logout-variant</v-icon>
        </v-btn>
      </v-form>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container>

        <!-- If using vue-router -->
        <slot></slot>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App"
}
</script>

<style scoped>

</style>
