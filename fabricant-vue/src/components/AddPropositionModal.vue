<template>
  <div id="popup-resolution" class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <h1 class="title has-text-centered">Ajouter une offre</h1>
        <div id="form" class="has-text-centered">
          <label class="subtitle" htmlFor="caracteristiques"
            >Caractéristiques technique :
          </label>
          <textarea
            class="textarea is-info"
            placeholder="Caractéristiques"
            name="caracteristiques"
            id="caracteristiques"
            value="requierements"
          ></textarea>
          <label class="subtitle">Cout : </label>
          <input
            class="input is-info"
            type="number"
            id="cout"
            name="cout"
            placeholder="Cout"
            value="cost"
          />
          <label class="subtitle">Temps : </label>
          <input
            class="input is-info"
            type="number"
            id="temps"
            name="temps"
            placeholder="Nb jours"
            value="time"
          />
          <label class="subtitle">Quantité : </label>
          <input
            class="input is-info"
            type="number"
            id="quantite"
            name="quantite"
            placeholder="Volume"
            value="quantity"
          />
          <button class="button m-2 is-success">Ajouter</button>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
export default {
  name: "AddPropositionMOdal",
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
  },
};
</script>