
//Milestone 1
//eplica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
//Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto


import { contacts } from "./data.js";

const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: contacts
    }
  },
  methods: {

  },
  computed: {

  },
  mounted() {
    console.log(this.contacts);
  },
}).mount("#app");