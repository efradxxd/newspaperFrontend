<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <bar/>
      <br>
      <br>
      <router-link to="home">Home</router-link>
      <router-link to="view">view</router-link>
      <router-view></router-view>
    </v-layout>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>Carthweel Galaxy Inc. &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-container>
</template>


<script>
import home from "@/components/home.vue";
import bar from "@/components/bar.vue";
export default {
  name: "App",
  components: {
    home,
    bar
  },
  data() {
    return {};
  },
  methods: {}
};
</script>