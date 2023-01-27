<script setup>
import axios from 'axios';
import {ref } from "vue";
import {useRoute, useRouter} from 'vue-router';

const route = useRoute();
const router = useRouter();

const poke = ref({});

//Probando router (hook router), empujamos al usuario a una ruta
const back = () => {
    router.push ('/pokemons')
}

const getData = async () =>{
    try {
        const {data} = await axios.get (`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
        console.log(data);
        poke.value=(data);
    } catch (error){
        poke.value = null;
    }
}

getData();
</script>
<template>
    <div v-if="poke">
        <img :src="poke.sprites?.front_default" alt="imagen pokemon" />
        <h1>Poke name: {{ $route.params.name }}</h1>
    </div>
    <h1 v-else>No existe el pokemon</h1>
    <button class="btn shadow" @click="back">Volver</button>
</template>