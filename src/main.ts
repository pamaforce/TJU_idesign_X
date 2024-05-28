import './assets/main.css';
import {createApp} from 'vue';
import {createPinia} from 'pinia';
import App from './App.vue';
import router from './router';
import '@/utils/rem';
import lazyPlugin from 'vue3-lazy'
import require from './utils/require';

const app = createApp(App)
lazyPlugin.install(app, {
    loading: require('image/loading.gif')
})
app.use(createPinia());
app.use(router);

app.mount('#app');
