<template>
  <v-layout row wrap>
    <card6/>
    <card6/>
    <card4/>
    <card4/>
    <card4/>
    <card6/>
    <card3/>
    <card3/>
    <card2/>
    <card2/>
    <card2/>
    <card2/>
    <card2/>
    <card2/>
    <card1/>
    <card1/>
    <card1/>
    <card1/>
    <card1/>
    <card1/>
    <card1/>
    <card1/>
    <card1/>
    <card1/>
    <card1/>
    <card1/>
  </v-layout>
</template>
<script>
import card6 from "@/components/card6.vue";
import card4 from "@/components/card4.vue";
import card3 from "@/components/card3.vue";
import card2 from "@/components/card2.vue";
import card1 from "@/components/card1.vue";
import view from "@/components/view.vue";
export default {
  name: "App",
  components: {
    card6,
    card4,
    card3,
    card2,
    card1,
    view
  },
  data() {
    return {};
  },
  methods: {}
};
</script>