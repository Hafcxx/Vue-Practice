<script setup>
import { useFavoritoStore } from '@/store/favorito';
import { storeToRefs } from 'pinia';

const useFavorito = useFavoritoStore();


const {favoritos} = storeToRefs(useFavorito);

</script>
<template>
    <h1>Favoritos</h1>
    <ul class="list-group">
        <li class="list-group-item"
            v-for="poke in favoritos"
            :key="poke.id"
            >
            {{ poke.name }}
        </li>
    </ul>
</template>