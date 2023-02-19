<script setup>
import {useCounterStore} from '@/store/counter'

const useCounter = useCounterStore();

const { increment } = useCounter; 
</script>

<template>
    <h1>HOME: counter: {{ useCounter.count }}</h1>
    <button @click="increment">Increment</button>
</template>
