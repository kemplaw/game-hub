import { createApp } from 'vue'
import './styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'
import { BaseIcon } from './components'

createApp(App)
  .use(store)
  .use(router)
  .use(BaseIcon)
  .mount('#app')
