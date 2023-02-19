import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useFavoritoStore = defineStore ('favoritos', ()=> {
    const favoritos = ref([]);

    const add = (pokemon) => favoritos.value.push(pokemon);

    return {
        favoritos,
        add
    }
});