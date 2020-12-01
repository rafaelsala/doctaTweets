<template>
    <div >
        <button class="botonCerrar" @click.prevent="cerrarSesion">Cerrar la sesión</button>
    </div>
</template>

<script>
export default {
    name: 'BotonCerrarSesion',

    methods: {
        cerrarSesion(){
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('username')
            //ruta a login despues de cerrar sesion
            this.$router.push({name: "Login"})
        }
    },
}
</script>

<style>

.botonCerrar {

  border: 2px solid transparent;
  background: #ebd44f;
  color: #ffffff;
  font-size: 16px;
  line-height: 25px;
  padding: 5px ;
  text-decoration: none;
  text-shadow: none;
  border-radius: 3px;
  box-shadow: none;
  width: 250px;
  margin: 5px 1100px;

}
.botonCerrar:hover {
  background-color: #e8cb27;
}



</style>