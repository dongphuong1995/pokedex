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
      context.commit(GET_POKEMON_PENDING);
      fetch(`https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(result => result.json())
        .then(json => commit(GET_POKEMON_SUCCESS, json.results))
        .catch(error => commit(GET_POKEMON_FAILED, error));
    },
  },
  mutations: { /*eslint-disable */
    [GET_POKEMON_SUCCESS]: (state, pokemon) => {
      state.pokemon = pokemon;
      state.isLoading = false;
    },
    [GET_POKEMON_PENDING]: (state, boolean = true) => {
      state.isLoading = boolean;
    },
    [GET_POKEMON_FAILED]: (state, error) => {
      state.error = error;
      state.isLoading = false;
    },
  },
};
