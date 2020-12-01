<template>
    <div>
        <div class="perfil">
            <h1>{{`Nombre: ${nombre}`}}</h1>
            <h2>{{`Usuario: ${usuario}`}}</h2>
            <h3>{{`Rol: ${rol}`}}</h3>
        </div>
        <boton-eliminar-cuenta @eliminarUsuario="eliminarUsuario"></boton-eliminar-cuenta>
    </div>
</template>

<script>
import BotonEliminarCuenta from '@/components/BotonEliminarCuenta'

export default {
    name: 'Perfil',
    components: {
        BotonEliminarCuenta
    },
    data() {
        return {
            nombre: '',
            usuario: '',
            rol: ''
        }
    },
    created() {
        fetch(`https://node-api-doctadevs.vercel.app/users/${sessionStorage.getItem('username')}`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json',
                'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
            },
        })
        .then(res => res.json())
        .then(data => {
            this.nombre = data.body.name;
            this.usuario = data.body.username;
            this.rol = data.body.role;
        })
        .catch(err => console.log(err))
    },
    methods: {
        eliminarUsuario(){
            fetch(`https://node-api-doctadevs.vercel.app/users/${sessionStorage.getItem('username')}`,{
                headers: {
                    'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
                },
                method: 'DELETE',
                body: {
                    autor: sessionStorage.getItem('username')
                    }
            })
            .then(res => {
                return res.json()
                })
            .then(data => {
                console.log(data)
                sessionStorage.removeItem('token')
                sessionStorage.removeItem('username')
                //ruta a login
                this.$router.push({name: 'Login'})
            })
            .catch(err => console.log(err))
        },
    },
}
</script>

<style>
.perfil {
    background-color: #ebd44f;
    border-radius: 5px;
}

</style>