<template>
    <div class="home">
        <formulario-publicacion :URL='URL'></formulario-publicacion>
        <lista-posts :URL='URL'></lista-posts>
    </div>
</template>

<script>
import FormularioPublicacion from '@/components/FormularioPublicacion'
import ListaPosts from '@/components/ListaPosts'


export default {
    name: 'Home',
    components: {
        ListaPosts,
        FormularioPublicacion
    },
    data() {
        return {
            URL: `https://node-api-doctadevs.vercel.app/posts`
        }
    },
}
</script>

<style lang="">

</style>