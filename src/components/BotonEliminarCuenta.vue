<template>
    <div class="boton">
        <button class="botonEliminar" @click="eliminarUsuario">Eliminar Usuario</button>
    </div>
</template>

<script>

export default {
    name: 'BotonEliminarCuenta',

    methods: {
        eliminarUsuario(){
            this.$emit('eliminarUsuario')
            //ruta a login despues de borar cuenta
            this.$router.push({name: "Login"})
        }
    },
}
</script>

<style>
.botonEliminar {

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
.botonEliminar:hover {
  background-color: #e8cb27;
}

</style>