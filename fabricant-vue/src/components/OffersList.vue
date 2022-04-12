<template>
  <div class="columns is-mobile is-centered">
    <div class="p-5 has-text-centered is-one-third">
      <h1 class="title">Propositions</h1>
      <input
        class="input is-info"
        type="text"
        name="fabricant"
        id="fabricant"
        placeholder="Entrer un fabricant"
        v-model="fabricant"
      />
      <div
        v-for="proposition in propositions"
        :key="get(proposition).requierements"
      >
        <offer-element
          :id="Object.keys(proposition)[0]"
          :requierements="get(proposition).requierements"
          :cost="get(proposition).cost"
          :time="get(proposition).time"
          :quantity="get(proposition).quantity"
          :propositions="get(proposition).propositions"
          :fabricant="fabricant"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import OfferElement from "./OfferElement.vue";

export default {
  name: "OffersList",
  components: {
    OfferElement,
  },
  data() {
    return {
      propositions: [],
      fabricant: "",
    };
  },
  methods: {
    get(proposition) {
      let key = Object.keys(proposition)[0];
      return proposition[key];
    },
    getFabr() {
      return document.getElementById("fabricant").value;
    },
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