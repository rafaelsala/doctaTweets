<template>
  <div class="posteos">
        <div class="datosUsuario">
            <h4>{{this.autor}}</h4>
            <h5>{{this.fecha}}</h5>
        </div>
        <div class="mensaje">
            <h3>{{this.mensaje}}</h3>
        </div>
        <div class="botones">
            <boton-like @eventoLike="likePost" @click="likePost" :idPostUsuario='idPost'></boton-like>{{this.likes}}
            <boton-eliminar-post :idPostUsuario='idPost' @postDelete="eliminarPost" v-if="username == autor"></boton-eliminar-post>
        </div>
  </div>
</template>

<script>
import BotonLike from '@/components/BotonLike'
import BotonEliminarPost from '@/components/BotonEliminarPost'
export default {
    name: 'Post',
    components: {
        BotonLike,
        BotonEliminarPost

    },
    props: {
        autor: String,
        fecha: String,
        likes: Number,
        mensaje: String,
        idPost: String,
    },

    data() {
        return {
            post: [],
            username: sessionStorage.getItem('username')
        }
    },
    methods: {
        likePost(){
            fetch(`https://node-api-doctadevs.vercel.app/posts/${this.idPost}/like`,
            {
                headers: {
                    'Content-Type':'application/json',
                    'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
                    },
                    method: 'POST'
                })
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    console.log(data)
                    this.$emit('like')

                })
                .catch(err => console.log(err));
            },

        eliminarPost(){
            fetch(`https://node-api-doctadevs.vercel.app/posts/${this.idPost}`, {
            headers: {
                'Content-Type':'application/json',
                'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
                },
                method: 'DELETE',
                body: JSON.stringify({
                    autor: sessionStorage.getItem('username')
                    })
            })
            .then(res => {
                return res.json()
                })
            .then(data => {
                console.log(data)
                this.$emit('eliminar')
            })
            .catch(err => console.log(err))
        },
}

}

</script>

<style>

.posteos {
display: flex;
background-color: #FFF;
padding: 20px;
border-radius: 5px;
width: 650px;
margin: 10px auto;
flex-flow: row wrap;
justify-content: center;
align-items: center;
min-height: 10vh;
text-transform: lowercase;

}
.datosUsuario {
display: flex;
flex-basis: 100%;

}
h4 {
margin: 10px;
padding-left: 10px;
width: 50%;
height: 10%;
background-color: #ebd44f;
border-radius: 5px;
}
.mensaje {
flex-basis: 100%;
margin: 5px 20px;
}
.botones {
align-items: center;
}
</style>