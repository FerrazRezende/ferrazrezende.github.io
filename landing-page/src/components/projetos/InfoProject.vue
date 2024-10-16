<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "InfoProject",
  props: {
    tituloProjeto: {
      type: String,
      required: true
    },
    descricaoProjeto: {
      type: String,
      required: true
    }
  },
  setup () {


    return {

    }
  }
})
</script>

<template>
  <main>
    <h3>Titulo do projeto: <span>{{ tituloProjeto }}</span></h3>
    <h3>Descrição do projeto: </h3>
    <p class="multi-line-truncate">{{ descricaoProjeto }}</p>
  </main>
</template>

<style lang="sass" scoped>
span
  font-size: 16px

h3
  font-family: var(--text-content), sans-serif
  font-size: 24px
  margin-top: 16px

p
  font-family: var(--text-content), sans-serif
  margin: 4px 0


.multi-line-truncate
  display: -webkit-box
  -webkit-box-orient: vertical
  overflow: hidden
  text-overflow: ellipsis
  -webkit-line-clamp: 3
  line-height: 1.5
  max-height: calc(1.5em * 3)



</style>