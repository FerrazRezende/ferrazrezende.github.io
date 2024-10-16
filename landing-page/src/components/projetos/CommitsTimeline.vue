<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  name: 'CommitsTimeline',
  props: {
    commits: {
      type: Array as () => { message: string; date: string; html_url: string}[],
      default: () => [],
      required: true,
    },
  },
  setup () {
    const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString("pt-BR", {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
      });
    };


    return {
      formatDate
    }
  }
})
</script>


<template>
  <el-timeline>
    <el-timeline-item
        v-for="commit in commits"
        :key="commit.date"
        :timestamp="formatDate(commit.date)"
    >

    <a :href="commit.html_url" target="_blank"><p class="truncate-text">{{ commit.message }}</p></a>

    </el-timeline-item>
  </el-timeline>
</template>


<style lang="sass" scoped>
a
  text-decoration: underline!important

.el-timeline
  padding-top: 16px

  --el-timeline-node-color: var(--primary-color)!important
  --el-text-color-primary: var(--text-color)!important

  font-family: var(--text-content), sans-serif

.truncate-text
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
  width: 200px

</style>

