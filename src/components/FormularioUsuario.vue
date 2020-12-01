<template>
  <body>
	<div class="login">
		<div class="login-screen">
			<div class="app-title">
				<h1>Unite a DoctaTweets</h1>
			</div>

			<div class="login-form">

                <div class="control-group">
				<input type="text" class="login-field" value="" placeholder="nombre" v-model="nombre" id="login-name">
				<label class="login-field-icon fui-user" for="login-name"></label>
				</div>

				<div class="control-group">
				<input type="text" class="login-field" value="" placeholder="usuario" v-model="usuario" id="login-name">
				<label class="login-field-icon fui-user" for="login-name"></label>
				</div>

				<div class="control-group">
				<input type="password" class="login-field" value="" placeholder="contraseña" v-model="password" id="login-pass">
				<label class="login-field-icon fui-lock" for="login-pass"></label>
				</div>

				<a @click.prevent="registrar" class="btn btn-primary btn-large btn-block" href="#">Registrarse</a>
				
			</div>
		</div>
	</div>
</body>
</template>

<script>
export default {
	name: 'FormularioUsuario',
	
	data() {
		return {
			nombre: '',
			usuario: '',
			password: '',
		}
	},
	methods: {
		registrar(){
            fetch('https://node-api-doctadevs.vercel.app/users',
            {
              method: 'POST',
              headers: {'Content-Type':'application/json'},
              body: JSON.stringify({
                "name": this.nombre,
                "username": this.usuario,
                "password": this.password
              })
            })
              .then(res => {
                return res.json()
              })
              .then(data => {
                console.log(data)
              })
              .catch(err => {
                console.log(err)
            })
            //para limpiar el form
            this.nombre = '';
            this.usuario = '';
            this.password = '';
            //ruta a Login despues del registro
            this.$router.push({name: "Login"})
        }
    },
}


</script>

<style>

* {
box-sizing: border-box;
}

*:focus {
	outline: none;
}
body {
font-family: Arial;
background-color: #4d4d4d;

}
.login {
margin: 100px auto;
width: 300px;

}
.login-screen {
background-color: #FFF;
padding: 20px;
border-radius: 5px
}

.app-title {
text-align: center;
color: #777;
font-size: 12px;
}

.login-form {
text-align: center;
}
.control-group {
margin-bottom: 10px;
}

input {
text-align: center;
background-color: #ECF0F1;
border: 2px solid transparent;
border-radius: 3px;
font-size: 16px;
font-weight: 200;
padding: 10px 0;
width: 250px;
transition: border .5s;
}

input:focus {
border: 2px solid #ebd44f;
box-shadow: none;
}

.btn {
  border: 2px solid transparent;
  background: #ebd44f;
  color: #ffffff;
  font-size: 16px;
  line-height: 25px;
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

.btn:hover {
  background-color: #e8cb27;
}



</style>