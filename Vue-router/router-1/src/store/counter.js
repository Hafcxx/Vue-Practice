import {defineStore} from 'pinia';
import { computed, ref } from 'vue';

export const useCounterStore = defineStore ("counter", () =>{
    const count = ref(0)
    const increment = () => count.value ++;
    const double = computed ( () => count.value*2)

    return {
        count,
        increment,
        double
    }
});
/*export const useCounterStore = defineStore('counter',{
    //data reactiva
    state: () =>({
        count: 0
    }),
    //Metodos
    actions: {
        increment(){
            this.count ++
        }
    },
    //prop computadas
    getters: {
        double: (state) => state.count * 2
    }
})*/