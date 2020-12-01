<template>
  <div class="feed">
      <formulario-publicacion :URL='URL'></formulario-publicacion>
      <lista-posts :URL='URL'></lista-posts>
  </div>
</template>

<script>
import FormularioPublicacion from '@/components/FormularioPublicacion'
import ListaPosts from '@/components/ListaPosts'
export default {
    name: 'Feed',
    components: {
        FormularioPublicacion,
        ListaPosts
        
    },
    data(){
        return{
            URL:`https://node-api-doctadevs.vercel.app/users/${this.$router.params.username}/posts`
        }
    },

}
</script>

<style>

</style>