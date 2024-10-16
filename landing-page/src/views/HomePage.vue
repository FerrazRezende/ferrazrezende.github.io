<script lang="ts">
import { defineComponent } from "vue";
import InfoComponent from "@/components/homepage/InfoComponent.vue";
import PrincipaisHabilidades from "@/components/principais_habilidades/PrincipaisHabilidades.vue";
import ImageParallax from "@/components/homepage/ImageParallax.vue";
import StacksHScroll from "@/components/homepage/StacksHScroll.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    StacksHScroll,
    ImageParallax,
    PrincipaisHabilidades,
    InfoComponent,
  },
  setup () {
    return {

    }
  }

})
</script>

<template>
  <main>
    <InfoComponent />
    <PrincipaisHabilidades />

    <div class="parallax-container">
      <ImageParallax />
    </div>

    <StacksHScroll />
  </main>
</template>

<style lang="sass" scoped>
.parallax-container
  margin: 74px 0
  padding: 0 50px
</style>