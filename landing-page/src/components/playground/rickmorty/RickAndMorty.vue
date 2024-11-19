<script lang="ts">
import {defineComponent, ref} from "vue"


export default defineComponent({
  name: "RickAndMorty",
  emits: ["close-rick-modal"],


  setup(_, { emit }) {
    const modalModel = ref(true)

    const closeDialog = () => {
        modalModel.value = false
        emit("close-rick-modal")
    }

    return {
      modalModel,
      closeDialog

    }
  }
})
</script>

<template>
  <main>
    <el-dialog
        v-model="modalModel"
        title="Tips"
        width="75%"
        @close="closeDialog"
    >
      <template #header>

      </template>
    </el-dialog>
  </main>
</template>

<style lang="sass" scoped>


</style>