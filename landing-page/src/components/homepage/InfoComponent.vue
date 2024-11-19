<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: "InfoComponent",
})
</script>

<template>
  <main>
    <article class="info-container">
      <div class="foto-container">

      </div>
      <div class="texto-container">
        <h3 class="mg-t">Olá, seja bem vindo =)</h3>
        <h3 class="mg-t">Eu me chamo</h3>
        <h1 class="mg-t">Matheus</h1>
        <p>
          Sou um desenvolvedor fullstack em formação.  Atualmente cursando o
          5º semestre de Ciências da Computação.
          nesse espaço busco apresentar um pouco mais sobre mim e aplicar
          algumas das habilidades que desenvolvi ao longo da minha trajetória.
        </p>
      </div>
    </article>
  </main>
</template>

<style lang="sass" scoped>
main
  background-color: var(--secondary-color)
  height: 371px
  width: 100vw

.info-container
  height: 100%
  padding: 0 128px
  display: flex
  align-items: center

.foto-container
  min-width: 259px
  height: 259px
  background-image: url('~@/assets/Foto.png')
  background-repeat: no-repeat
  margin-right: 64px

.texto-container
  height: 100%
  width: 572px
  display: flex
  flex-direction: column
  justify-content: center

h3
  font-family: var(--text-content), sans-serif
  font-size: 32px

h1
  font-family: var(--text-title), sans-serif
  font-size: 64px

p
  font-family: var(--text-content), sans-serif

.mg-t
  margin-bottom: 8px


@media (max-width: 768px)
  main
    height: 156px

  .info-container
    padding: 0

  .foto-container
    min-width: 156px
    height: 156px
    margin-right: 16px
    background-size: cover

  h3
    font-size: 16px


  h1
    font-size: 24px

  p
    font-size: 12px

  .mg-t
    margin-bottom: 4px

</style>