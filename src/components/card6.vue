<template>
  <v-flex xs6 v-if="showNote==false">
    <v-card>
      <v-img
        src="https://img.elcomercio.pe/files/ec_article_multimedia_gallery/uploads/2019/02/10/5c60d5c1c1d4f.jpeg"
        aspect-ratio="2.75"
      ></v-img>

      <v-card-title primary-title>
        <div>
          <h3
            class="headline mb-0"
          >Grammy 2019: esta es la lista completa de ganadores del premio | FOTOS</h3>
          <div>Childish Gambino, Drake,
            <br>Lady Gaga y más artistas se llevaron galardones en el Grammy 2019 , ...
          </div>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</template>
<script>
import view from "@/components/view.vue";
export default {
  data() {
    return {
      showNote: false
    };
  },
  components: {
    view
  },
  methods: {}
};
</script>