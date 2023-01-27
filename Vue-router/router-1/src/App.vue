<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
        <nav class="navbar bg-light">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">
            <img 
              src="@/assets/logo.svg" 
              alt="Logo" 
              width="30" 
              height="24" 
              class="d-inline-block align-text-top" 
            />
            PokeApp
          </router-link>
          <div>
          <router-link to="/" class="btn btn-outline-primary">Home</router-link>
          <router-link to="/pokemons" class="btn btn-outline-primary" >Pokemons</router-link>
        </div>
        </div>

      </nav>
      <div class="container">
        <RouterView />
      </div>
  
</template>
