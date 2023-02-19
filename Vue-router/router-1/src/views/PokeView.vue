<script setup>
import axios from 'axios';
import {ref } from "vue";
import {useRoute, useRouter} from 'vue-router';
import {useGetData} from '@/composables/getData';
import {useFavoritoStore} from '@/store/favorito'

const route = useRoute();
const router = useRouter();
const useFavoritos = useFavoritoStore();

//destructuramos metodos de useFavoritoStore
const {add} = useFavoritos;

const {data, loading, getData} = useGetData();
const poke = ref({});

//Probando router (hook router), empujamos al usuario a una ruta
const back = () => {
    router.push ('/pokemons')
}

/*

const getData = async () =>{
    try {
        const {data} = await axios.get (`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
        console.log(data);
        poke.value=(data);
    } catch (error){
        poke.value = null;
    }
}
*/

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>
<template>
    <div v-if="data">
        <img :src="data.sprites?.front_default" alt="imagen pokemon" />
        <h1>Poke name: {{ $route.params.name }}</h1>
        

        <button class="btn btn-primary mb-2" @click = "add(data)">Agregar a fav</button>

    </div>
    <h1 v-else>No existe el pokemon</h1>
    <button class="btn shadow" @click="back">Volver</button>
</template>