import Vue from 'vue';
import Vuex from 'vuex';
import PokemonState from './modules/pokemons';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { PokemonState },
  strict: false,
  plugins: [],
});

export default store;
