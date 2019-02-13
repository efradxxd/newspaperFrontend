<template>
  <v-layout row wrap>
    <v-flex xs12 align-content-center>
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
          </div>
          <div>
            <p>Childish Gambino, Drake, Lady Gaga y más artistas se llevaron galardones en el Grammy 2019; la ceremonia musical más importante del mundo desarrollada desde el Staples Center de Los Ángeles (California, Estados Unidos).</p>
          </div>
          <br>
          <p>Una de las primeras ganadoras de la gala principal fue Lady Gaga por "Shallows", que recibió el premio a Mejor grabación del año. "Estaba tan orgullosa de ser parte de una película que hace referencia a los problemas de salud mental, son muy importantes. Muchos artistas viven con ellos y tenemos que cuidarnos los unos a los otros", sostuvo visiblemente emocionada</p>
          <br>
          <p>Entre los momentos más destacados de los Grammy 2019 se encuentran el homenaje a Dolly Parton en el que participaron Katy Perry y Miley Cyrus; así como la presentación de H.E.R.; la artista revelación de la gala. Tampoco podemos dejar de mencionar la performance de Lady Gaga con "Shallows", canción también nominada al Oscar.</p>
          <br>
          <p>De igual manera Cardi B, ataviada con plumas negras y junto a una talentosa pianista, llevó a cabo un espectáculo que combinó seducción, ritmo y una coreografía compleja.</p>
          <br>
          <center></center>

          <blockquote class="twitter-tweet" data-lang="es">
            <p lang="en" dir="ltr">
              Get ready for Music&#39;s Biggest Night! 🎶 From the red carpet to backstage and beyond, here is how to watch the
              <a
                href="https://twitter.com/hashtag/GRAMMYs?src=hash&amp;ref_src=twsrc%5Etfw"
              >#GRAMMYs</a> Feb. 10:
              <a href="https://t.co/ylWwqN9jCy">https://t.co/ylWwqN9jCy</a>
              <a href="https://t.co/0qC9ZzKB6k">pic.twitter.com/0qC9ZzKB6k</a>
            </p>&mdash; Recording Academy / GRAMMYs (@RecordingAcad)
            <a
              href="https://twitter.com/RecordingAcad/status/1093555627912282112?ref_src=twsrc%5Etfw"
            >7 de febrero de 2019</a>
          </blockquote>
        </v-card-title>
        <v-img
          src="https://img.elcomercio.pe/files/ec_article_multimedia_gallery/uploads/2019/02/10/5c60deb72306b.jpeg"
          aspect-ratio="2.22"
        ></v-img>
        <br>
        <v-img
          src="https://img.elcomercio.pe/files/ec_article_multimedia_gallery/uploads/2019/02/10/5c60cce48b547.jpeg"
          aspect-ratio="2.22"
        ></v-img>
        <div class="text-xs-center">
          <v-btn color="warning">
            <router-link to="/home">Regresar</router-link>">
          </v-btn>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<script>
import home from "@/components/home.vue";
import view from "@/components/view.vue";
export default {
  components: {
    home
  },
  data() {
    return {};
  }
};
</script>