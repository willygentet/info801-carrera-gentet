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

      <button @click="showModal()" class="button is-success">Proposer</button>

      <div id="popup-resolution" class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <h1 class="title has-text-centered">Ajouter une proposition</h1>
            <div id="form" class="has-text-centered">
              <label class="subtitle" htmlFor="caracteristiques"
                >Caractéristiques technique :
              </label>
              <textarea
                class="textarea is-info"
                placeholder="Caractéristiques"
                name="caracteristiques"
                id="caracteristiques"
                :value="requierements"
              ></textarea>
              <label class="subtitle">Cout : </label>
              <input
                class="input is-info"
                type="number"
                id="cout"
                name="cout"
                placeholder="Cout"
                :value="cost"
              />
              <label class="subtitle">Temps : </label>
              <input
                class="input is-info"
                type="number"
                id="temps"
                name="temps"
                placeholder="Nb jours"
                :value="time"
              />
              <label class="subtitle">Quantité : </label>
              <input
                class="input is-info"
                type="number"
                id="quantite"
                name="quantite"
                placeholder="Volume"
                :value="quantity"
              />
              <button class="button m-2 is-success">Ajouter</button>
            </div>
          </div>
        </div>
        <button
          @click="closeModal()"
          class="modal-close is-large"
          aria-label="close"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
//import AddPropositionModal from "./AddPropositionModal.vue";
export default {
  components: {},
  name: "OfferElement",
  methods: {
    showModal() {
      let modal = document.querySelector(".modal");
      modal.classList.add("is-active");
    },
    closeModal() {
      let modal = document.querySelector(".modal");
      modal.classList.remove("is-active");
    },
  },
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