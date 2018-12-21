import {
  GET_POKEMON,
  GET_POKEMON_FAILED,
  GET_POKEMON_PENDING,
  GET_POKEMON_SUCCESS,
} from '../actionTypes';

export default {
  state: {
    pokemon: [],
    isLoading: false,
  },
  actions: {
    [GET_POKEMON]: ({ commit }, pokemonId) => {
      commit(GET_POKEMON_PENDING);
      fetch(`https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      // ? success json không dẫn đến resuls ??
        .then(result => result.json())
        .then(json => commit(GET_POKEMON_SUCCESS, json))
        .catch(error => commit(GET_POKEMON_FAILED, error));
    },
  },
  mutations: { /*eslint-disable */
    [GET_POKEMON_SUCCESS]: (state, pokemon) => {
      state.pokemon = pokemon;
      state.isLoading = false;
    },
    [GET_POKEMON_PENDING]: (state) => {
      state.isLoading = true;
    },
    [GET_POKEMON_FAILED]: (state, error) => {
      state.error = error;
      state.isLoading = false;
    },
  },
};
