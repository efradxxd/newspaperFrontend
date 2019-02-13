<template>
  <v-toolbar app fixed>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-spacer></v-spacer>
    <v-toolbar-title>The New York Times</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
      right: null
    };
  }
};
</script>
