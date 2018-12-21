<template>
    <div class="container">
        <Loading v-if="pokemonState.isLoading"/>
        <div class="row" v-else>
            <RenPoke 
            v-for="(pokemon, index) in pokemonState.pokemons"
            :pokemon="pokemon"
            :id="index + 1"
            :key="pokemon.name"
            />
        </div>
        <Alert />
    </div>
</template>

<script>

import {GET_POKEMONS} from '../store/actionTypes.js'
import Loading from '../components/Loading';
import RenPoke from '../components/RenPoke';
import Alert from '../components/Alert';
import Nav from '../components/partial/Nav';

export default {
    name: 'Home',
    components: {
        Loading, RenPoke, Alert, Nav
    },
    created () {
        // * when starting render vue same time khởi tạo dispatch action GET_POKEMONS 
        this.$store.dispatch(GET_POKEMONS);
    },
    computed: {
        pokemonState: function() {
            return this.$store.state.PokemonState;
        // * uses pokemonState from store
        },
    },
};
</script>