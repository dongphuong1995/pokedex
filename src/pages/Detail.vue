<template>
  <div class="row">
    <div class="col-12">
      <h2>PokeDex</h2>
      <Alert/>
      <Loading v-if="detailPokemonState.isLoading"/>
      <template v-else>
        <div class="row text-center border">
          <div class="col-4">
            <img src="https://pokemonletsgo.pokemon.com/assets/img/common/char-eevee.png" alt="">
          </div>
          <div class="col-8">
            <p>Pokemon Name : {{ detailPokemonState.pokemon.name }}</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>

import Loading from "../components/Loading";
import Alert from "../components/Alert";
import { GET_POKEMON } from "../store/actionTypes";

export default {
  name: "Detail",
  components: {
    Loading,
    Alert
  },
  created() {
    this.$store.dispatch(GET_POKEMON, this.$router.params.id);
  },
  computed: {
    detailPokemonState: function() {
      return this.$store.state.detailPokemonState;
    }
  }
};
</script>
