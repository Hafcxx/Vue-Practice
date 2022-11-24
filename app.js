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

const { createAppBoots } = Vue    
    createApp({
    data() {
        return{
            fondo: 'bg-warning',
            color: false
        }
    }
}).mount('#appBoots');

const { createComp } = Vue    
    createApp({
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