<script setup>
import Components from './components/components.vue';
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';

import {ref} from "vue";

const posts = ref([
  {title: "Post 1", id: 1, body: "descripcion 1"},
  {title: "Post 2", id: 2, body: "descripcion 2"},
  {title: "Post 3", id: 3, body: "descripcion 3"},
  {title: "Post 4", id: 4},
])

const favorito = ref('')

const cambiarFavorito = (post) => {
  favorito.value = post;
}
</script>


<template>
<div class="wrapper">
  <HelloWorld msg="Hola Vue" />
  <h2>Mi post favorito: </h2>
  <Components v-for = "post in posts"
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
