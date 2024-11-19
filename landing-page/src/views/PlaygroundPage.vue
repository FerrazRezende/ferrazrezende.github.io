<script lang="ts">
import { defineComponent, ref } from "vue";
import APINasa from "@/components/playground/nasa/APINasa.vue";
import RickAndMorty from "@/components/playground/rickmorty/RickAndMorty.vue";

export default defineComponent({
  name: "PlaygroundPage",
  components: {
    RickAndMorty,
    APINasa,
  },
  setup() {

    const isNasaModalOpen = ref(false)
    const isRickModalOpen = ref(false)

    const openNasaModal = () => {
      isNasaModalOpen.value = true
    };

    const openRickModal = () => {
      isRickModalOpen.value = true
    }

    const closeNasaModal = () => {
      isNasaModalOpen.value = false
    }

    const closeRickModal = () => {
      isRickModalOpen.value = false
    }


    return {
      isRickModalOpen,
      isNasaModalOpen,
      closeRickModal,
      closeNasaModal,
      openRickModal,
      openNasaModal,


    };
  },
});
</script>

<template>
  <APINasa v-if="isNasaModalOpen" @close-nasa-modal="closeNasaModal" />
  <RickAndMorty v-if="isRickModalOpen" @close-rick-modal="closeRickModal"/>
  <main>
    <h1>Playground</h1>
    <article>

      <section @click="openNasaModal">
        <h2>APIs Abertas da NASA</h2>
        <v-icon
            class="btn-icon"
            name="fa-rocket"
            animation="float"
            speed="slow"
            scale="4"
        />
      </section>

      <el-tooltip
          class="box-item"
          effect="dark"
          content="Em breve"
          placement="bottom"
      >
        <section class="desativado">
          <h2>API Rick & Morty</h2>
          <v-icon class="btn-icon" name="fa-flask" scale="4" />
        </section>

      </el-tooltip>


    </article>

    <article>

      <el-tooltip
          class="box-item"
          effect="dark"
          content="Em breve"
          placement="bottom"
      >

        <section class="desativado">
          <h2>Pokédex</h2>
          <v-icon class="btn-icon" name="md-catchingpokemon" scale="4" />
        </section>

      </el-tooltip>


      <el-tooltip
          class="box-item"
          effect="dark"
          content="Em breve"
          placement="bottom"
      >

        <section class="desativado">
          <h2>API Riot Games</h2>
          <v-icon class="btn-icon" name="si-riotgames" scale="4" />
        </section>

      </el-tooltip>

    </article>
  </main>
</template>

<style lang="sass" scoped>
h1
  font-family: var(--text-title), sans-serif
  text-align: center
  font-size: 32px
  padding: 64px 0

h2
  font-family: var(--text-header), sans-serif
  font-weight: bold
  font-size: 24px
  text-align: center

article
  padding: 16px
  margin: 16px 0
  display: flex
  justify-content: space-evenly

section
  padding: 4px
  width: 220px
  height: 220px
  border-radius: 8px
  outline: 8px solid var(--primary-color)
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  cursor: pointer


.desativado
  transition: 0s!important
  transform: translateY(0)!important
  opacity: 0.5

.desativado:hover
  outline: 8px solid var(--primary-color)
  background-color: transparent

section:hover
  background-color: var(--primary-color)
  outline: 8px solid var(--text-color)
  color: #FAFAFA!important
  transform: translateY(-5%)
  transition: 0.2s

.btn-icon
  margin: 8px 0

@media (max-width: 768px)
  section
    width: 110px
    height: 110px
    outline: 4px solid var(--primary-color)

  h2
    font-size: 12px

  .btn-icon
    width: 32px!important

</style>
