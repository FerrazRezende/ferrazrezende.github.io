<script lang="ts">
import {defineComponent, ref} from "vue";
import type { TabsPaneContext } from 'element-plus'
import APODNasa from "@/components/playground/nasa/APOD.vue";
import EPICNasa from "@/components/playground/nasa/EPIC.vue";

export default defineComponent({
  name: "APINasa",
  components: {EPICNasa, APODNasa},
  emits: ["close-nasa-modal"],

  setup(_, { emit }) {

    const modalModel = ref(true)
    const activeName = ref('first')

    const closeDialog = () => {
      modalModel.value = false
      emit("close-nasa-modal")
    }

    const handleClick = (tab: TabsPaneContext, event: Event) => {
      console.log(tab, event)
    }


    return {
      modalModel,
      activeName,
      closeDialog,
      handleClick,

    };
  },
});
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
        <div class="my-header">
          <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="Astronomy Picture of the Day" name="first">
              <APODNasa />
            </el-tab-pane>
            <el-tab-pane label="Earth Polychromatic Imaging Camera"  name="second">
              <EPICNasa />
            </el-tab-pane>
          </el-tabs>
        </div>
      </template>
    </el-dialog>
  </main>
</template>

<style lang="sass">
.dialog-footer
  display: flex
  justify-content: flex-end

.my-header
  border: 2px solid var(--primary-color)
  border-radius: 16px

.el-dialog
  --el-dialog-bg-color: var(--background-color)!important
  border: 4px solid var(--primary-color)!important
  border-radius: 16px

.el-dialog__title
  font-family: var(--text-header), sans-serif !important
  color: var(--text-color)!important


.el-dialog__body
  font-family: var(--text-content), sans-serif !important
  color: var(--text-color)!important

.el-tabs
  padding: 0 32px!important
  font-family: var(--text-content), sans-serif !important
  text-align: center


.el-tabs__item
  color: var(--text-color) !important

.el-tabs__active-bar
  background-color: var(--primary-color)!important

@media (max-width: 768px)
  .el-dialog
    width: 100%

</style>
