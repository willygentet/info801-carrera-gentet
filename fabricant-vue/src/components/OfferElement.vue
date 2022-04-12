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
      <h1 class="title has-text-white">{{ this.requierements }}</h1>
      <div class="subtitle has-text-white">Cout : {{ this.cost }}</div>
      <div class="subtitle has-text-white">Time : {{ this.time }}</div>
      <div class="subtitle has-text-white">Quantité : {{ this.quantity }}</div>

      <button @click="showModal(this.id)" class="button is-success">Proposer</button>

      <div id="popup-resolution" :class='"modal id"+ this.id'>
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
                :value="this.requierements"
              ></textarea>
              <label class="subtitle">Cout : </label>
              <input
                class="input is-info"
                type="number"
                id="cout"
                name="cout"
                placeholder="Cout"
                :value="this.cost"
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
                :value="this.quantity"
              />
              <button class="button m-2 is-success">Ajouter</button>
            </div>
          </div>
        </div>
        <button
          @click="closeModal(this.id)"
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
    showModal(id) {
      let modal = document.querySelector(".id"+id);
      modal.classList.add("is-active");
    },
    closeModal(id) {
      let modal = document.querySelector(".id"+id);
      modal.classList.remove("is-active");
    },
  },
  props: {
    id:{
      type: Number,
      required: true,
    },
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