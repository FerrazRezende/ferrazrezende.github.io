<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "FooterComponent",
  setup () {

    const iconUrl = {
      vuedoc: "https://vuejs.org/guide/introduction.html",
      nasapi: "https://api.nasa.gov/",
      rickapi: "https://rickandmortyapi.com/",
      pokeapi: "https://pokeapi.co/",
    }

    return {
      iconUrl
    }
  }
})
</script>

<template>
  <main>
    <div class="github-container">
      <a href="https://github.com/FerrazRezende" target="_blank"><v-icon name="co-github" scale="2" /></a>
    </div>
    <div class="linha-vertical"></div>
    <div class="playground-container">
      <a :href="iconUrl.vuedoc" target="_blank"><v-icon name="co-vue-js" scale="2" class="mr-i" /> Documentação VueJS</a>
      <a :href="iconUrl.nasapi" target="_blank"><v-icon name="fa-user-astronaut" scale="2" class="mr-i" /> API NASA</a>
      <a :href="iconUrl.rickapi" target="_blank"><v-icon name="fa-flask" scale="2" class="mr-i" /> API Rick & Morty</a>
      <a :href="iconUrl.pokeapi" target="_blank"><v-icon name="md-catchingpokemon" scale="2" class="mr-i" /> API Pokémon</a>
    </div>
  </main>
</template>

<style lang="sass" scoped>
a
  font-family: var(--text-content), sans-serif
  display: flex
  align-items: center
  margin-bottom: 32px

main
  background-color: var(--primary-color)
  width: 100vw
  height: 487px
  display: flex
  align-items: center
  color: #FAFAFA!important

.github-container
  width: 50%
  height: 100%
  display: flex
  align-items: center
  justify-content: center

.linha-vertical
  width: 2px
  height: 80%
  background-color: #FAFAFA
  margin: 20px

.playground-container
  display: flex
  flex-direction: column
  justify-content: center

.mr-i
  margin-right: 16px

@media (max-width: 768px)
  main
    height: 356px

</style>