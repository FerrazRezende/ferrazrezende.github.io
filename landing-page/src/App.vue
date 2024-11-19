<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import HeaderComponent from "@/components/partials/HeaderComponent.vue";
import FooterComponent from "@/components/partials/FooterComponent.vue";
import LoadingPage from "@/components/loading/LoadingPage.vue";

export default defineComponent({
  name: 'App',
  components: {
    LoadingPage,
    FooterComponent,
    HeaderComponent,
  },
  setup() {
    const loading = ref(true)


    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 1000)
    });

    return {
      loading,
    };
  },
});
</script>

<template>
  <main>
    <LoadingPage v-if="loading" />

    <div v-else>
      <HeaderComponent />
      <router-view></router-view>
      <FooterComponent />
    </div>
  </main>
</template>

<style lang="sass">

.el-notification
  font-family: var(--text-content), sans-serif!important
  background-color: var(--background-color)!important
  border: 1px solid var(--primary-color)!important
  --el-notification-content-color: var(--text-color)

.el-notification__content
  color: var(--text-color)!important

.el-notification__title
  color: var(--text-color)!important
  font-family: var(--text-title), sans-serif!important

.el-input
  --el-input-bg-color: var(--background-color)!important
  --el-input-focus-border-color: var(--primary-color)!important

.el-picker-panel
  font-family: var(--text-content), sans-serif!important
  --el-bg-color-overlay: var(--background-color)!important
  color: var(--secondary-color)!important

.el-date-picker
  --el-datepicker-off-text-color: var(--primary-color)!important
  --el-datepicker-active-color: var(--text-color)!important
  --el-datepicker-hover-text-color: var(--text-color)!important

.el-date-table td.today .el-date-table-cell__text
  color: var(--text-color)!important

.el-date-table th
  color: var(--text-color)!important


.el-date-table td.disabled .el-date-table-cell
  background-color: var(--background-color)!important
  color: #222222!important

.el-picker__popper
  --el-datepicker-border-color: var(--primary-color)!important

.el-date-table td.current:not(.disabled) .el-date-table-cell__text
  background-color: var(--primary-color)!important

.el-popper
  font-family: var(--text-content), sans-serif!important

main
  overflow-x: hidden

</style>
