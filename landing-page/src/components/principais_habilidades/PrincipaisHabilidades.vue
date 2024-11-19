<script lang="ts">
import {defineComponent} from "vue"
import CardComponent from "@/components/principais_habilidades/CardComponent.vue";

interface cardData {
  icon: string,
  title: string,
  content: string
}

export default defineComponent({
  name: "PrincipaisHabilidades",
  components: {
    CardComponent
  },

  setup () {

    const cardData: cardData[] = [
      {
        icon: "ri-computer-line",
        title: "Front end",
        content: "Tenho conhecimento da base do front end, HTML, CSS e JS. Já trabalhei em sistemas com arquitetura ejs (embedded javascript templates) e desenvolvi projetos pessoais em VueJs."
      },
      {
        icon: "bi-terminal",
        title: "Back end",
        content: "Minha principal stack é o Python, tenho conhecimento sobre Web Scraping, REST APIs e também a base sobre modelagem e implementação de banco de dados SQL. "
      },
      {
        icon: "bi-globe",
        title: "Dev ops",
        content: "Tenho conhecimento prático nas principais plataformas de Cloud Computin, GCP, AWS e Azure. Também tenho prática com servidor nginx."
      }
    ]

    return {
      cardData,
    }
  }
})
</script>

<template>
  <main>
    <div class="titulo-container">
      <h1>Principais Habilidades</h1>
    </div>
    <section>
      <CardComponent
      v-for="(card, i) in cardData"
      :key="i"
      :icon="card.icon"
      :title="card.title"
      :content="card.content"
      class="cards"
      />
    </section>
  </main>
</template>

<style lang="sass" scoped>
.titulo-container
  width: 100vw
  height: 127px
  display: flex
  align-items: center
  justify-content: center

h1
  font-family: var(--text-content), sans-serif
  font-size: 50.52px

section
  width: 100vw
  display: flex
  justify-content: center

section > .cards
  margin: 0 32px

@media (max-width: 768px)

  h1
    font-size: 32px



@media (max-width: 1370px)
  section

    flex: 2 1 100px
    flex-wrap: wrap


  section > .cards
    margin: 32px 32px

</style>