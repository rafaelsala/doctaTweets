<template>
    <div class="formPublicacion" >
        <form class="text" @submit.prevent="publicacionPost" >
            <h5>Tweets</h5>
            <textarea v-model="publicacion" placeholder="Cuenta que está pasando?"></textarea>
            <button class="botonTweet">Twittear</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormularioPublicacion',
    
    data() {
        return {
            publicacion: '',
        }
    },
    methods: {
        publicacionPost() {
            fetch('https://node-api-doctadevs.vercel.app/posts',
                {
                method: 'POST',
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type':'application/json',
                    'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify({

                    autor: sessionStorage.getItem('username'),
                    mensaje: this.publicacion
                }
                )
                }
            )
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
            //limpiar form
            this.publicacion = '';
        },
    },
}
</script>

<style>
.formPublicacion {
    display: flex;
    font-family: Arial;
    width: 650px;
    margin: 20px auto;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #ebd44f;
    padding: 5px;
}
.text {
    width: 95%;
}
textarea {
    border: none;
    font-size: 1.5rem;
    width: 100%;
    background-color: white;
    border-bottom: 1.5px solid;
    font-family: Arial;
    font-size: 15px;
}
h5 {
    color: black;
    font-size: 20px;
    margin: 10px;
    text-align: center;
}
.botonTweet {
    border: 2px solid transparent;
    background: #4d4d4d;
    color: #ffffff;
    font-size: 16px;
    padding: 10px 0;
    text-decoration: none;
    text-shadow: none;
    border-radius: 3px;
    box-shadow: none;
    transition: 0.25s;
    display: block;
    width: 250px;
    margin: 0 auto;
}
.botonTweet:hover {
    background-color: #919191;
}
</style>