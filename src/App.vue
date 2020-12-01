<template>
  <div class="contenedor">
      <header-app></header-app>
      <router-view></router-view>
      <footer-app></footer-app>
  </div>
  
</template>


<script>
import HeaderApp from '@/components/HeaderApp'
import FooterApp from '@/components/FooterApp'


export default {
    name: 'App',
    components: {
      HeaderApp,
      FooterApp,
    },
}
</script>

<style>
  body {
    background-color: #4d4d4d;
    font-family: Arial;
  }
</style>