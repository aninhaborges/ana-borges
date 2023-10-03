<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>
<template>
  <v-app>
    <!--<v-app-bar :elevation="1">
      <v-spacer></v-spacer>
      <span>
        <v-icon icon="mdi:mdi-vuetify"></v-icon>
        <b> Nuxt.js Template</b>
      </span>
      <v-spacer></v-spacer>
    </v-app-bar>-->
  
    <v-list-item title="Dados de Sul-Americanos" subtitle="Minha aplicação- Vuetify"></v-list-item>
    <v-divider></v-divider>
    <nav>
      <RouterLink to ="/argentina"><p>Argentina</p></RouterLink>
    </nav>
    <nav>
      <RouterLink to ="/bolivia"><p>Bolivia</p></RouterLink>
    </nav>
    <nav>
      <RouterLink to ="/brazil"><p>Brazil</p></RouterLink>
    </nav>
    <nav>
      <RouterLink to ="/chile"><p>Chile</p></RouterLink>
    </nav>
    <nav>
      <RouterLink to ="/colombia"><p>Colombia</p></RouterLink>
    </nav>
    
   

    <v-main>
      <slot></slot>
    </v-main>

    <v-footer app border>
      Feito por Ana Clara! 
    </v-footer>
  </v-app>
</template>
