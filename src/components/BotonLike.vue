<template>
    <div>
        <button class="botonLike" @click="likePost">Like</button>
    </div>
</template>

<script>
export default {
    name: 'BotonLike',
    methods: {
       likePost(){
       this.$emit('eventoLike')
       }
    },
}
</script>

<style>
.botonLike {
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
.botonLike:hover {
  background-color: #e8cb27;
}


</style>