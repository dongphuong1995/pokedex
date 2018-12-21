<template>
  <div class="col-3 text-center border">
    <img :src="Url" alt>
    <br>
    <br>
    <p>PokeMon Name: {{ pokemon.name }}</p>
  </div>
</template>

<script>
export default {
  name: "RenPoke",
  props: {
    pokemon: {
      type: Object,
      default: {}
    },
    id: Number
  },
  computed: {
    Url: function() {
      let urlDefault =
        "https://banner2.kisspng.com/20180205/pde/kisspng-super-smash-bros-pokxe9mon-icon-pokeball-png-picture-5a78d780124748.3724062215178689280749.jpg";
      if (this.id < 800) {
        urlDefault = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          this.id
        }.png`;
      }
      return urlDefault;
    }
  }
};
</script>

<style scoped>
img {
  width: 100px;
}
.border {
  padding: 10px;
  margin: 10px;
  border: 1px solid gray;
}
</style>