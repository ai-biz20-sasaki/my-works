import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

//fontawesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faYoutube, faTwitter } from '@fortawesome/fontawesome-free-brands'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* add icons to the library */
library.add(faUserSecret, faGithub, faYoutube, faTwitter)
//library.add(faGithub)

var app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

//createApp(App).use(router).mount('#app')
