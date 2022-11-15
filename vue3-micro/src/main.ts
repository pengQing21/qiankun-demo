/* eslint-disable */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './public-path.js'

import App from './App.vue'
import router from './router'

import './assets/main.css'

let instance = null
function render(props = {}) {
    const { container } = props
    instance = createApp(App).use(createPinia()).use(router)
    instance.mount(container ? container.querySelect('#app') : '#app')
}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
    console.log('[vue] props from main framework', props);
    render(props);
}
export async function unmount() {
    instance.$destroy();
    instance.$el.innerHTML = '';
    instance = null;
    router = null;
}