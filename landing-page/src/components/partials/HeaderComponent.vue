<script lang="ts">
import {computed, defineComponent, onMounted, ref} from "vue"
import { useRoute, useRouter } from "vue-router"
import {useThemeStore} from "@/stores/themeStore"

export default defineComponent({
  name: "HeaderComponent",
  setup () {
    const themeStore = useThemeStore()
    const router = useRouter()
    const route = useRoute()
    const isMenuOpen = ref(false)

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    const goToPlayground = () => {
      router.push({ name: "PlaygroundPage" })
      isMenuOpen.value = false
    }

    const goToProject = () => {
      router.push({ name: "ProjectPage" })
      isMenuOpen.value = false
    }

    const goToHomePage = () => {
      router.push({ name: "HomePage" })
      isMenuOpen.value = false
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
      goToPlayground,
      goToProject,
      goToHomePage,
      isActive,
      isMenuOpen,
      toggleMenu
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


    <div class="all-container">
      <button class="menu-toggle" @click="toggleMenu">
        <v-icon name="bi-list" scale="2" />
      </button>
      <div class="left-nav" :class="{ 'menu-open': isMenuOpen }">
        <ul>
          <li @click="goToHomePage" :class="{ 'active-menu': isActive('HomePage') }"><a>Página principal</a></li>
          <li @click="goToProject" :class="{ 'active-menu': isActive('ProjectPage') }">Projetos</li>
          <li @click="goToPlayground" :class="{ 'active-menu': isActive('PlaygroundPage') }">Playground</li>

          <el-tooltip
              class="box-item"
              effect="dark"
              content="Em breve"
              placement="bottom"
          >
            <li class="desativado" :class="{ 'active-menu': isActive('BlogPage') }">Blog</li>
          </el-tooltip>

        </ul>
      </div>
      <div class="theme-container">
        <v-icon @click="themeStore.toggleTheme" :name="iconTheme" class="theme-changer" :class="themeStore.isDark ? 'light-bg' : 'dark-bg'" scale="2.1" />
      </div>
    </div>
  </header>
</template>

<style lang="sass" scoped>
header
  padding: 0 32px
  display: flex
  justify-content: space-between
  align-items: center
  width: 100%
  height: 85px
  background-color: var(--primary-color)
  color: #FAFAFA!important
  font-family: var(--text-header), sans-serif
  position: relative

.right-icons
  display: flex
  align-items: center

  a
    margin-right: 32px

.all-container
  display: flex
  align-items: center

.desativado
  color: grey!important
  cursor: alias!important

.left-nav

  ul
    display: flex
    align-items: center
    margin: 0
    padding: 0
    list-style: none

    li
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
  transition: 1s

.light-bg
  background-color: #FAFAFA!important

.dark-bg
  background-color: #110F1C!important
  color: #FAFAFA!important

.menu-toggle
  display: none
  background: none
  border: none
  color: #FAFAFA
  cursor: pointer
  padding: 8px
  position: absolute
  right: 16px
  top: 50%
  transform: translateY(-50%)

@media (max-width: 768px)
  .menu-toggle
    display: block

  .left-nav
    position: fixed
    top: 85px
    left: 0
    width: 100%
    background-color: var(--primary-color)
    transform: translateX(-100%)
    transition: transform 0.3s ease-in-out

    &.menu-open
      transform: translateX(0)

    ul
      flex-direction: column
      padding: 20px 0

      li
        margin: 16px 0
        width: 100%
        text-align: center

  .right-icons
    a
      margin-right: 16px

      svg
        transform: scale(1)

  .theme-changer
    width: 32px
    height: 32px

  .theme-container
    margin: 0 48px

  .menu-open
    padding: 0 32px
</style>