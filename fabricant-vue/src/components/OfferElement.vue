<template>
  <div>
    <div>{{ requierements }}</div>
    <div>{{ cost }}</div>
    <div>{{ time }}</div>
    <div>{{ quantity }}</div>
    <div>{{ propositions }}</div>
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