import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import router from './router';

/* import './localAxios'; */
import './style.css';
import App from './App.vue';

const pinia = createPinia();

pinia.use(({ store })=>{
    store.router = markRaw(router)
    console.log(router) 
}) 

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');