<template>
    <body>
	<div class="login">
		<div class="login-screen">
			<div class="app-title">
				<h1>Ingresar</h1>
			</div>

			<div class="login-form">
				<div class="control-group">
				<input type="text" class="login-field" value="" placeholder="usuario" v-model="usuario" id="login-name">
				<label class="login-field-icon fui-user" for="login-name"></label>
				</div>

				<div class="control-group">
				<input type="password" class="login-field" value="" placeholder="contraseña" v-model="password" id="login-pass">
				<label class="login-field-icon fui-lock" for="login-pass"></label>
				</div>

				<a @click.prevent="ingresar" class="btn btn-primary btn-large btn-block" href="#">Iniciar sesión </a>
				<a class="login-link" href="#">Olvidaste tu contraseña?</a>
        <a class="login-link-registro" href="./registro">Unite a DoctaTweet</a>
			</div>
		</div>
	</div>
</body>
</template>

<script>

export default {
    name: 'FormularioLogin',

    data() {
      return {
        usuario: '',
        password: '',
        error: '',
      }
    },
    methods: {
      ingresar(){
            fetch('https://node-api-doctadevs.vercel.app/login',
            {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                        username: this.usuario,
                        password: this.password,
                        })
            })
            .then(res => {
                return res.json()
            })
            .then(result => {
                if (result.error){
                    this.error = result.message;
                    return
                }
                sessionStorage.setItem('username', this.usuario);
                sessionStorage.setItem("token", result.body.token);
                this.username = "";
                this.password = "";

                this.$router.push({name: "Home"}); 
            })
            .catch(err => {
                console.log(err)
            })


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

.login-link {
  font-size: 12px;
  color: #444;
  display: block;
	margin-top: 12px;
}

.login-link-registro {
  font-size: 12px;
  color: #444;
  display: block;
	margin-top: 12px;
}


</style>