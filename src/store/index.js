import Vue from 'vue';
import Vuex from 'vuex';
import PokemonState from './modules/pokemons';
import DetailPokemonState from './modules/pokemon';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { PokemonState, DetailPokemonState },
  strict: false,
  plugins: [],
});

export default store;
