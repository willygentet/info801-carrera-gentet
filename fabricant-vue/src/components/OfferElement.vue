<template>
  <div class="columns m-4 is-mobile is-centered">
    <div
      class="
        box
        pr-6
        pl-6
        has-text-centered
        is-half
        has-background-dark
        is-rounded
      "
    >
      <h1 class="title has-text-white">{{ requierements }}</h1>
      <div class="subtitle has-text-white">Cout : {{ cost }}</div>
      <div class="subtitle has-text-white">Time : {{ time }}</div>
      <div class="subtitle has-text-white">Quantité : {{ quantity }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfferElement",
  props: {
    requierements: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    propositions: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>