<template>
    <div>
        <ul class="list-group">
            <li v-for="(fruta, index) of frutas" :key="fruta.id" @click="aumentar(index)"
            class="list-group-item d-flex justify-content-between align-items-center">
                {{fruta.nombre}}
                <span class="badge badge-primary badge-pill">{{fruta.cantidad}}</span>
            </li>
        </ul>
        <button class="btn m-2" @click="reiniciar">Reiniciar</button>
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

    export default{
        name: 'Lista',
        computed:{
            ...mapState(['frutas'])
        },
        methods: {
            ...mapMutations(['aumentar', 'reiniciar'])
        }
    }
</script>