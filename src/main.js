import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  //Verificamos si la ruta requiere token
  if(to.matched.some(record => record.meta.logueado)){

    //Preguntamos si existe el token de verif.
    if(!sessionStorage.getItem('token')){
      next({path: '/',});
    }else {
      next();
    }
  } else {
      next();
  }
})
