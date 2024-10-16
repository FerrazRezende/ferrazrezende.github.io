<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "DocumentacaoBotao",
  props: {
    docUrl: {
      type: String,
      required: true
    },
  },
  setup () {
    return {

    }
  }
})
</script>

<template>
  <a :href="docUrl" class="documentacao-botao" target="_blank">
    <v-icon name="io-document-text" scale="4" />
    <p>Ver documentação</p>
  </a>
</template>

<style lang="sass" scoped>


.documentacao-botao
  outline: 1px solid var(--text-color)
  padding: 4px 8px
  display: flex
  flex-direction: column
  align-items: center
  border-radius: 8px
  cursor: pointer

.documentacao-botao:hover
  background-color: var(--primary-color)
  outline: 4px solid var(--text-color)
  color: #FAFAFA!important

p
  font-family: var(--text-content), sans-serif
  margin: 4px 0
  text-wrap: nowrap
  font-size: 14px
</style>