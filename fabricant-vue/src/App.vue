<template>
  <div>
    <nav-bar />
    <offers-list />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import OffersList from "./components/OffersList.vue";

export default {
  name: "App",
  components: {
    OffersList,
    NavBar,
  },
};
</script>

<style>
</style>
