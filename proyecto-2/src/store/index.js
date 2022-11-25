import { createStore } from 'vuex'

export default createStore({
  state: {
    frutas: [
      {nombre: 'Manzana', cantidad: 0},
      {nombre: 'Pera', cantidad: 0},
      {nombre: 'Naranja', cantidad: 0},
    ],
    contador: [],
    selector: 0
  },
  getters: {
  },
  mutations: {
    aumentar(state){
      state.selector ++;
    },
    reducir(state){
      state.selector --;
    },
    reiniciar(state){
      state.selector = 0;
    },
    guardar(state){
      state.contador.push(state.selector);
    }
  },
  actions: {
  },
  modules: {
  }
})
