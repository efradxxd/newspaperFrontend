<template>
  <v-flex xs1 v-if="showNote==false">
    <v-card>
      <div>
        <p>Grammy 2019: esta es la lista completa</p>
      </div>
    </v-card>
  </v-flex>
</template>
<script>
import card2 from "@/components/card2.vue";

export default {
  data() {
    return {
      showNote: false
    };
  },
  components: {
    card2
  },
  methods: {}
};
</script>