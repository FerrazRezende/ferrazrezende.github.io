<script lang="ts">
import {defineComponent, ref} from 'vue'
import HeaderComponent from "@/components/partials/HeaderComponent.vue";
import FooterComponent from "@/components/partials/FooterComponent.vue";
import {useRouter} from "vue-router";
import LoadingPage from "@/components/loading/LoadingPage.vue";



export default defineComponent<unknown>({
  name: 'App',
  components: {
    LoadingPage,
    FooterComponent,
    HeaderComponent,
  },
  setup () {

    const loading = ref(false)
    const router = useRouter()

    router.beforeEach((to, from, next) => {
      loading.value = true
      next()
    })

    router.afterEach(() => {
      setTimeout(() => {

        loading.value = false
      }, 1000)
    })

    return {
      loading
    }
  }

})
</script>

<template>
  <main>
    <LoadingPage v-if="loading" />

    <HeaderComponent v-if="!loading"  />

    <router-view v-if="!loading" ></router-view>
    <FooterComponent />
  </main>
</template>


<style lang="sass">
main
  overflow-x: hidden

</style>