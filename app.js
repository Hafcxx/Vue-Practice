const { createApp } = Vue    
    createApp({
    data() {
        return {
            message: 'Hello Vue!',
            frutas: ['Manzana', 'Pera', 'Platano'],
            nuevaFruta : ''
        }
    },
    methods: {
        agregarFruta (){
            this.frutas.push(this.nuevaFruta);
            this.nuevaFruta = '';
        }
        

    }
}).mount('#app')