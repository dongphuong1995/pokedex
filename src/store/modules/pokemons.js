import {
  GET_POKEMONS,
  GET_POKEMONS_FAILED,
  GET_POKEMONS_PENDING,
  GET_POKEMONS_SUCCESS,
  SEARCH_POKEMONS,
  SEARCH_POKEMONS_FAILED,
  SEARCH_POKEMONS_PENDING,
  SEARCH_POKEMONS_SUCCESS,
} from '../actionTypes';

export default {
  // * export modeles uses import index.js inside store
  state: {
    pokemons: [],
    isLoading: false,
    response: {
      type: '',
      message: '',
      isShow: false,
    },
  },
  actions: {
    [GET_POKEMONS]: (context) => {
      context.commit(GET_POKEMONS_PENDING);
      fetch('https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/')
        .then(result => result.json())
        // * convert result.json to result.object to handle
        .then(json => context.commit(GET_POKEMONS_SUCCESS, json.results))
        // * seen api pokemon have name & picture inside results
        .catch(error => context.commit(GET_POKEMONS_FAILED, error.message));
    },
    [SEARCH_POKEMONS]: (context, keySearch) => {
      context.commit(SEARCH_POKEMONS);
      fetch(`https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/${keySearch}`)
        .then(result => result.json())
        .then(json => context.commit(SEARCH_POKEMONS_SUCCESS, json))
        // * seen api pokemon have name & picture inside json return
        .catch(error => context.commit(SEARCH_POKEMONS_FAILED, error.message));
    },
  },
  mutations: {/*eslint-disable*/
    [GET_POKEMONS_SUCCESS]: (state, pokemons) => {
      state.pokemons = pokemons; 
      state.isLoading = false;
    },
    [GET_POKEMONS_PENDING]: (state, boolean = true) => {
      state.isLoading = boolean;
    },
    [GET_POKEMONS_FAILED]: (state, error) => {
      state.response = error;
      state.isLoading = false;
    },

    [SEARCH_POKEMONS_SUCCESS]: (state, pokemon) => {
      state.pokemons = [pokemon];
      // * when fetch api pokemon return pokemon is a Object but pokemons is a array
      // *so that convert array
      state.isLoading = false;
      state.response = {
        type: 'success',
        message: 'SEARCH_POKEMONS_SUCCESS',
        isShow: true,
      };
    },
    [SEARCH_POKEMONS_PENDING]: (state, boolean = true) => {
      state.isLoading = boolean;
      state.response = { ...state.response, isShow: false };
      // * giữ nguyên data trong response , thay doi isShow
    },
    [SEARCH_POKEMONS_FAILED]: (state, error) => {
      state.response = {
        type: 'danger',
        message: error,
        isShow: true,
      };
      state.isLoading = false;
    },
  },
};
