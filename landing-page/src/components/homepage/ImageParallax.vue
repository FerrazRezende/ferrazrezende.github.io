<script lang="ts">
import {computed, defineComponent} from "vue";
import {useThemeStore} from "@/stores/themeStore";

export default defineComponent({
  name: "ImageParallax",


  setup() {

    const themeStore = useThemeStore()

    const imageTheme = computed(() => {
      return themeStore.isDark ? "bg-img-dark" : "bg-img-light"
    })

    return {
      imageTheme,
    }
  }
})
</script>

<template>
  <main>
    <div :class="imageTheme" id="parallax"></div>
  </main>
</template>

<style lang="sass">

#parallax
  min-height: 232px

  background-attachment: fixed
  background-position: center
  background-repeat: no-repeat
  background-size: cover

.bg-img-dark
  background-image: url('~@/assets/parallax/night.jpg')

.bg-img-light
  background-image: url('~@/assets/parallax/mountain.jpg')

@media (max-width: 768px)
  #parallax
    min-height: 122px
</style>