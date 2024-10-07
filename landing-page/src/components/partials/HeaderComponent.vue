<script lang="ts">
import {defineComponent, onMounted, ref} from "vue"
import { useRoute, useRouter } from "vue-router"

export default defineComponent({
  name: "HeaderComponent",
  setup () {
    const isDark = ref(false)
    const iconTheme = ref("")
    const router = useRouter()
    const route = useRoute()

    const checkTheme = () => {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      iconTheme.value = isDark.value ? "bi-sun-fill" : "bi-moon-stars-fill"
    }

    const toggleTheme = () => {
      isDark.value = !isDark.value
      iconTheme.value = isDark.value ? "bi-sun-fill" : "bi-moon-stars-fill"
      document.body.classList.toggle('dark-theme', isDark.value)
      document.body.classList.toggle('light-theme', !isDark.value);
    };

    const goToProject = () => {
      router.push({ name: "ProjectPage" })
    }

    const goToHomePage = () => {
      router.push({ name: "HomePage" })
    }

    const isActive = (routeName: string) => {
      return route.name === routeName;
    };

    onMounted(() => {
      checkTheme()
    })




    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkTheme)

    return {
      isDark,
      iconTheme,
      checkTheme,
      toggleTheme,
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
      <v-icon name="co-discord" scale="2" />
      <v-icon name="co-github" scale="2" />
    </div>
    <div class="left-nav">
      <ul>
        <li @click="goToHomePage" :class="{ 'active-menu': isActive('HomePage') }"><a>Página principal</a></li>
        <li @click="goToProject" :class="{ 'active-menu': isActive('ProjectPage') }">Projetos</li>
        <li :class="{ 'active-menu': isActive('PlaygroundPage') }">Playground</li>
        <li :class="{ 'active-menu': isActive('BlogPage') }">Blog</li>
        <div>
          <v-icon @click="toggleTheme" :name="iconTheme" class="theme-changer" :class="isDark ? 'light-bg' : 'dark-bg'" scale="2.1" />
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

div > svg
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
  transition: 1s

.dark-bg
  background-color: #110F1C!important
  color: #FAFAFA!important
  transition: 1s


</style>