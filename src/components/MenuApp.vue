<template>
  <div class="menu">
      <router-link class="rutaLink" :to="{path:'/'}">Login</router-link>
      <router-link class="rutaLink" :to="{path:'/registro'}">Registro</router-link>
      <router-link class="rutaLink" :to="{path:'/feed'}">Feed</router-link>
      <router-link class="rutaLink" :to="{path:'/home'}">Home</router-link>
      <router-link class="rutaLink" :to="{path:'/Perfil'}">Perfil</router-link>
      
  </div>
</template>

<script>
export default {
    name: 'MenuApp',
    data() {
      return {
        username: window.sessionStorage.getItem('username')
      }
    },
}
</script>

<style>
.menu {
text-align: start;
}

.rutaLink {

  border: 2px solid transparent;
  background: #ebd44f;
  color: #ffffff;
  font-size: 16px;
  line-height: 25px;
  padding: 5px;
  text-decoration: none;
  text-shadow: none;
  border-radius: 3px;
  box-shadow: none;
  width: 250px;
  margin: 0px 10px;
  
}
.rutaLink:hover {
  background-color: #e8cb27;
}


</style>