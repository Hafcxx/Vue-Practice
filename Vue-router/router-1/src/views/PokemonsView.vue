<script setup>
import {RouterLink} from 'vue-router';
import {useGetData} from '@/composables/getData';


const {data, loading, getData} = useGetData();

/*const getData = async () =>{
    try {
        const data = await axios.get('https://pokeapi.co/api/v2/pokemon');
        console.log(data.data.results);
        pokemons.value = data.data.results;
    } catch (error) {
        console.log(error);
    }
}*/
getData('https://pokeapi.co/api/v2/pokemon'); 
</script>

<template>
    <h1>Pokemon</h1>
    <p v-if="loading">Cargando información...</p>
    <div v-if="data">
        <p v-for="poke in data.results">
        {{ poke.name }}
        <router-link :to="`pokemons/${poke.name}`">link</router-link>
        </p>
    </div>

</template>