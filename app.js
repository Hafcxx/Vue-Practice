const { createApp } = Vue    
createApp({
    data() {
        return {
            message: 'Hello Vue!',
            frutas: [
                {nombre:'Manzana', cantidad: 10},
                {nombre:'Pera', cantidad: 0 },
                {nombre:'Platano', cantidad: 10} ],
            nuevaFruta : '',
            Total: 0
        }
    },
    methods: {
        agregarFruta (){
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            });
            this.nuevaFruta = '';
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            for (fruta of this.frutas){
                this.total+= fruta.cantidad;
            }
            return this.total;
        }
    }
}).mount('#app');
/*
const { createAppBoots } = Vue    
createAppBoots({
    data() {
        return{
            fondo: 'bg-warning',
            color: false
        }
    }
}).mount('#appBoots');

const { createComp } = Vue    
createComp({
    data() {
        return{
            mensaje: 'hola soy fuegoo',
            contador: 0
        }
    },
    computed: {
        invertido(){
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            return {
                'bg-sucess' :this.contador <= 10,
                'bg-warning' :this.contador >10 && this.contador<=20,
                'bg-danger' : this.contador >20
            }
        }
    }
}).mount('#appComp')
//la función de los ciclos de vida es para llamar eventos entre las cargas de vue
const { createLife } = Vue    
createApp({
    data() {
        return{
            saludo: 'soy ciclo de vida de Vue'
        }
    },
    beforeCreate(){
        console.log("beforeCreate")
    },
    beforeUpdate(){
        console.log("before update")
    },
    updated(){
        console.log("updated")
    },

    //aparentemente en vue 3 el metodo destroy fue reemplazado por unounted
    methods:{
        destruir(){
            this.$destroy();
        }
    }
}).mount('#appLife')

//Componentes 
/*export default {
    data() {
      return {
        count: 0
      }
    },
    template: `
      <button @click="count++">
        You clicked me {{ count }} times.
      </button>`
}*/*/