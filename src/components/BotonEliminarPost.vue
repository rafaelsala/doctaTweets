<template>
    <div>
        <button class="botonEliminarPost" @click="eliminarPost">Eliminar Post</button>
    </div>
</template>

<script>
export default {
    name: 'BotonEliminarPost',
    methods: {
        eliminarPost(){
            this.$emit('postDelete')
        }
    },
}
</script>

<style>
.botonEliminarPost {

  border: 2px solid transparent;
  background: #ebd44f;
  color: #ffffff;
  font-size: 12px;
  line-height: 5px;
  padding: 5px ;
  text-decoration: none;
  text-shadow: none;
  border-radius: 3px;
  box-shadow: none;
  width: 100px;
}
.botonEliminarPost:hover {
  background-color: #e8cb27;
}


</style>