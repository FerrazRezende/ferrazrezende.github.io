<script lang="ts">
import {defineComponent} from 'vue'
import HeaderComponent from "@/components/partials/HeaderComponent.vue";



export default defineComponent<unknown>({
  name: 'App',
  components: {
    HeaderComponent,
  },
  setup () {


    return {

    }
  }

})
</script>

<template>
  <main>
    <HeaderComponent />
    <router-view />
  </main>
</template>


<style lang="sass">


</style>