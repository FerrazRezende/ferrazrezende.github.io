import { createApp } from 'vue'
import App from './App.vue'
import router from './route/routes'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './style/reset.sass'
import './style/global.sass'

import { OhVueIcon, addIcons } from "oh-vue-icons"
import {
    CoDiscord,
    CoGithub,
    BiMoonStarsFill,
    BiSunFill,
    RiComputerLine,
    BiTerminal,
    BiGlobe,
    CoVueJs,
    FaUserAstronaut,
    FaFlask,
    MdCatchingpokemon,
    SiFastapi,
    CoDjango,
    FaPhp,
    LaHtml5,
    LaCss3Alt,
    CoJs,
    FaNodeJs,
    CoJquery,
    CoPostgresql,
    CoAmazonAws,
    CoPython,
    IoDocumentText,
    PrAngleDown,
    FaRocket,
    SiRiotgames,
    MdInfoOutlined,
    BiTranslate,
    BiList
    

} from "oh-vue-icons/icons"
import { createPinia } from "pinia"

addIcons(
    CoDiscord,
    CoGithub,
    BiMoonStarsFill,
    BiSunFill,
    RiComputerLine,
    BiTerminal,
    BiGlobe,
    CoVueJs,
    FaUserAstronaut,
    FaFlask,
    MdCatchingpokemon,
    SiFastapi,
    CoDjango,
    FaPhp,
    LaHtml5,
    LaCss3Alt,
    CoJs,
    FaNodeJs,
    CoJquery,
    CoPostgresql,
    CoAmazonAws,
    CoPython,
    IoDocumentText,
    PrAngleDown,
    FaRocket,
    SiRiotgames,
    MdInfoOutlined,
    BiTranslate,
    BiList

)

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.component("v-icon", OhVueIcon)

app.mount("#app")
