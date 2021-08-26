import { createApp } from 'vue';
import App from '@/App.vue';
import store from '@/store';
import router from '@/router';
// rem适配
import '@/plugins/lib-flexible';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(Vant);
app.mount('#app');
