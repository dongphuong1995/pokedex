<template>
  <nav class="navbar navbar-light bg-light justify-content-between">
    <router-link to="/Home" class="navbar-brand">Navbar</router-link>
    <router-link to="/" class="navbar-brand">Detail</router-link>

    <form class="form-inline">
      <input
        v-model="keySearch"
        @keyup.enter="onSearch"
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search..."
        aria-label="Search"
      >
      <button @click="onSearch" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </nav>
</template>

<script>
import { SEARCH_POKEMONS, GET_POKEMONS } from "../../store/actionTypes.js";
export default {
  name: "Nav",
  data() {
    return {
      keySearch: '',
    };
  },
  methods: {
    onSearch: function() {
      if(!keySearch) {
        this.$store.dispatch(GET_POKEMONS);
        return;
      }
      this.$store.dispatch(SEARCH_POKEMONS, this.keySearch);
    }
  }
};
</script>