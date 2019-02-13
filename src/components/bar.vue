<template>
  <v-toolbar app>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-spacer></v-spacer>
    <v-toolbar-title>The New York Times</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm">
      <v-btn flat>
        <router-link to="home">Home</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="view">view</router-link>
      </v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import home from "@/components/home.vue";
import view from "@/components/view.vue";
export default {
  components: {
    home,
    view
  },
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
