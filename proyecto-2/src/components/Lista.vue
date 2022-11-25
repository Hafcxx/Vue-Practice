<template>
    <div>
        <h3>{{selector}}</h3>
        <button class="btn m-2" @click="reiniciar">Reiniciar</button>
        <button class="btn m-2" @click="aumentar">+</button>
        <button class="btn m-2" @click="reducir">-</button>
        <button class="btn m-2" @click="guardar">agregar</button>
        <hr>
        <h1> Números Favoritos </h1>
        <p>{{contador}}</p>
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

    export default{
        name: 'Lista',
        computed:{
            ...mapState(['frutas','contador','selector'])
        },
        methods: {
            ...mapMutations(['aumentar', 'reducir','reiniciar','guardar'])
        }
    }
</script>