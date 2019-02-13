<template>
  <v-flex xs3 v-if="showNote==false">
    <v-card>
      <v-card-title primary-title>
        <div>
          <h4
            class="headline mb-0"
          >Grammy 2019: esta es la lista completa de ganadores del premio | FOTOS</h4>
          <div>Childish Gambino, Drake,
            <br>Lady Gaga y más artistas se llevaron galardones en el Grammy 2019 , ...
          </div>
        </div>
      </v-card-title>
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