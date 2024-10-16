
<script lang="ts">
import LoadingSpin from "@/components/loading/LoadingSpin.vue";

export default {
  name: "LoadingPage",
  components: {LoadingSpin},
};
</script>



<template>
  <div class="loading-page">
    <LoadingSpin />
  </div>
</template>


<style scoped lang="sass">
.loading-page
  display: flex
  align-items: center
  justify-content: center
  position: fixed
  height: 100vh
  width: 100vw
  z-index: 100
  background-color: var(--background-color)


</style>
