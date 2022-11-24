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
}).mount('#app')