<template>
<div>
  <div class="contenedorHeader">
      <img class="logo" src="@/assets/logo8.png" alt="">
  </div>
    <boton-cerrar-sesion></boton-cerrar-sesion>
  <div>
      <menu-app class="menu"></menu-app>
  </div>
</div>
</template>

<script>
import MenuApp from "@/components/MenuApp.vue";
import BotonCerrarSesion from "@/components/BotonCerrarSesion.vue";
export default {
    name: 'HeaderApp',
    components: {
        BotonCerrarSesion,
        MenuApp
        
    }
}
</script>

<style>

.contenedorHeader {
    padding: 0px;
    width: 100vw;
    height: 15vh;
    background-color: #ebd44f; 
    border-radius: 0 0 20px 20px;
    padding: 0px;
    text-align: start;
}

.logo {
    height: auto;
    width: 20%;
}

.menu {
    padding: 1px; 
}
</style>