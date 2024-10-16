<script lang="ts">
import {computed, defineComponent, onMounted} from "vue"
import { useRoute, useRouter } from "vue-router"
import {useThemeStore} from "@/stores/themeStore"

export default defineComponent({
  name: "HeaderComponent",
  setup () {
    const themeStore = useThemeStore()
    const router = useRouter()
    const route = useRoute()


    const goToProject = () => {
      router.push({ name: "ProjectPage" })
    }

    const goToHomePage = () => {
      router.push({ name: "HomePage" })
    }

    const isActive = (routeName: string) => {
      return route.name === routeName;
    };

    const iconTheme = computed(() => {
      return themeStore.isDark ? "bi-sun-fill" : "bi-moon-stars-fill";
    });

    onMounted(() => {
      themeStore.checkTheme()
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', themeStore.checkTheme)

    })

    return {
      themeStore,
      iconTheme,
      goToProject,
      goToHomePage,
      isActive,

    }
  }
})
</script>

<template>
  <header>
    <div class="right-icons">
      <a href="https://discordapp.com/users/Matheus-Ferraz#3474" target="_blank"><v-icon name="co-discord" scale="2" /></a>
      <a href="https://github.com/FerrazRezende" target="_blank"><v-icon name="co-github" scale="2" /></a>
    </div>
    <div class="left-nav">
      <ul>
        <li @click="goToHomePage" :class="{ 'active-menu': isActive('HomePage') }"><a>Página principal</a></li>
        <li @click="goToProject" :class="{ 'active-menu': isActive('ProjectPage') }">Projetos</li>
        <li :class="{ 'active-menu': isActive('PlaygroundPage') }">Playground</li>
        <li :class="{ 'active-menu': isActive('BlogPage') }">Blog</li>
        <div>
          <v-icon @click="themeStore.toggleTheme" :name="iconTheme" class="theme-changer" :class="themeStore.isDark ? 'light-bg' : 'dark-bg'" scale="2.1" />
        </div>
      </ul>
    </div>

  </header>
</template>

<style lang="sass" scoped>
header
  padding: 0 32px
  display: flex
  justify-content: space-between
  align-items: center
  width: 100vw
  height: 85px
  background-color: var(--primary-color)
  color: #FAFAFA!important
  font-family: var(--text-header), sans-serif

div > a
  margin-right: 32px

ul
  display: flex
  align-items: center


ul > li
  margin: 0 32px
  cursor: pointer
  transition: color 1s ease, background-color 1s ease


.active-menu
  background-color: var(--secondary-color)
  padding: 10px
  border-radius: 6px


.theme-changer
  color: var(--primary-color)
  width: 72px
  height: 48px
  border-radius: 50%
  padding: 4px

.light-bg
  background-color: #FAFAFA!important

.dark-bg
  background-color: #110F1C!important
  color: #FAFAFA!important



</style>