<template>
  <div>
    <h1>Propositions</h1>
    <div v-for="proposition in propositions" :key="proposition.requierements">
      <!-- <offer-element
        :requierements="proposition.requierements"
        :cost="proposition.cost"
        :time="proposition.time"
        :quantity="proposition.quantity"
        :propositions="proposition.propositions"
      /> -->
      {{ proposition }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import OfferElement from "./OfferElement.vue";

export default {
  name: "OffersList",
  components: {
    //OfferElement,
  },
  data() {
    return {
      propositions: [],
    };
  },
  created() {
    axios
      .get("http://127.0.0.1:5000/offers")
      .then((response) => (this.propositions = response.data));
  },
};
</script>

<style scoped>
</style>