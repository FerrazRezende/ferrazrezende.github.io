import { createApp } from 'vue'
import App from './App.vue'
import router from './route/routes'

import { OhVueIcon, addIcons} from "oh-vue-icons"
import {
    CoDiscord,
    CoGithub,
    BiMoonStarsFill,
    BiSunFill,
} from "oh-vue-icons/icons"

import './style/reset.sass'
import './style/global.sass'


addIcons(
    CoDiscord,
    CoGithub,
    BiMoonStarsFill,
    BiSunFill,
)

const app = createApp(App)


applyTheme()

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme)

app.use(router)
app.component("v-icon", OhVueIcon)
app.mount("#app")

function applyTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (prefersDark) {
        document.body.classList.add('dark-theme')
        document.body.classList.remove('light-theme')
    } else {
        document.body.classList.add('light-theme')
        document.body.classList.remove('dark-theme')
    }
}

