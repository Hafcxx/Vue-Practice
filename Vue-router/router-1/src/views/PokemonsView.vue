<script setup>
import axios from 'axios'
import {ref} from 'vue';
import {RouterLink} from 'vue-router';

const pokemons = ref([]);

const getData = async () =>{
    try {
        const data = await axios.get('https://pokeapi.co/api/v2/pokemon');
        console.log(data.data.results);
        pokemons.value = data.data.results;
    } catch (error) {
        console.log(error);
    }
}

getData();
</script>

<template>
    <h1>Pokemon</h1>
    <p v-for="poke in pokemons">
        {{ poke.name }}
        <router-link :to="`pokemons/${poke.name}`">link</router-link>
    </p>
</template>