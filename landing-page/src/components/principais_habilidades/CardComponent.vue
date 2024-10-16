<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "PHCardComponent",
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },

  setup(props) {
    return {
      titulo: props.title,
      conteudo: props.content,
      icone: props.icon,
    }
  }
})
</script>

<template>
  <main>
    <div class="card-container">
      <div class="card-circulo">
        <v-icon :name="icone" scale="3" />
      </div>
      <article class="card-content">
        <h1>{{ titulo }}</h1>
        <p>{{ conteudo }}</p>
      </article>
    </div>
  </main>
</template>

<style lang="sass" scoped>
h1
  font-family: var(--text-title), sans-serif
  margin-top: 32px
  font-size: 32px
  text-align: center
  margin-bottom: 8px

p
  font-family: var(--text-content), sans-serif
  margin-top: 8px
  font-size: 16px
  line-height: 1.5

.card-container

  display: flex
  flex-direction: column
  align-items: center

.card-circulo
  width: 128px
  height: 128px
  background-color: var(--primary-color)
  border-radius: 50%
  z-index: 100
  margin-bottom: -32px
  display: flex
  align-items: center
  justify-content: center

.card-content
  width: 384px
  height: 216px
  padding: 15px
  border-radius: 8px
  background-color: var(--secondary-color)
</style>