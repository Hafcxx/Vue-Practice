<script setup>
import Components from './components/components.vue';
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import Botones from './components/botones.vue';

import {ref} from "vue";


const posts = ref([]);
const postByPage = 10;
const inicio = ref(0);
const fin = ref(postByPage);

const next = () => {
    inicio.value = inicio.value + postByPage
    fin.value = fin.value + postByPage
}
const favorito = ref("")

const cambiarFavorito = (post) => {
  favorito.value = post;
}

fetch ('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => {
    posts.value = data
  });
</script>


<template>
<div class="wrapper">
  <HelloWorld msg="Hola Vue" />
  <h2>Mi post favorito: </h2>
  <Botones class ="mb-2"></Botones>

  <button @click="next">Next provisorio</button>

  <Components v-for = "post in posts.slice(inicio, fin)"
    :key = "post.id"
    :title = "post.title"
    :id ="post.id"
    :body = "post.body"
    @cambiarFavorito = "cambiarFavorito"/>
</div>
</template>

<!--
<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>
-->
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
