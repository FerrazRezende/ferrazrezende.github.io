<script lang="ts">
import { defineComponent, computed } from 'vue'

interface Stacks {
  name: string | null
  icon: string
  side: boolean
}

export default defineComponent({
  name: 'StacksHScroll',
  setup() {
    const stacks: Stacks[] = [
      { icon: "co-python", name: "Python", side: true },
      { icon: "co-django", name: "Django", side: true },
      { icon: "si-fastapi", name: "FastAPI", side: true },
      { icon: "fa-node-js", name: "Node.js", side: true },
      { icon: "co-js", name: "JavaScript", side: true },
      { icon: "co-jquery", name: "jQuery", side: true },

      { icon: "fa-php", name: null, side: false },
      { icon: "la-html5", name: "HTML", side: false },
      { icon: "la-css3-alt", name: "CSS", side: false },
      { icon: "co-vue-js", name: "Vue.js", side: false },
      { icon: "co-postgresql", name: "PostgreSQL", side: false },
      { icon: "co-amazon-aws", name: "AWS", side: false },
    ];


    const topStacks = computed(() => {
      const filteredStacks = stacks.filter(stack => !stack.side);
      return [...filteredStacks, ...filteredStacks, ...filteredStacks];
    });

    const bottomStacks = computed(() => {
      const filteredStacks = stacks.filter(stack => stack.side);
      return [...filteredStacks, ...filteredStacks, ...filteredStacks];
    });

    return {
      topStacks,
      bottomStacks,
    };
  },
});
</script>

<template>
  <div class="stack-marquee-container">
    <div class="fog-overlay left"></div>
    <div class="fog-overlay right"></div>
    <div class="stack-marquee">
      <div class="stack-row">
        <div class="stack-row-inner">
          <template v-for="(stack, index) in topStacks" :key="index">
            <div class="stack-item">
              <v-icon :name="stack.icon" scale="5" />
              <p v-if="stack.name">{{ stack.name }}</p>
            </div>
          </template>
        </div>
      </div>

      <div class="stack-row reverse">
        <div class="stack-row-inner">
          <template v-for="(stack, index) in bottomStacks" :key="index">
            <div class="stack-item">
              <v-icon :name="stack.icon" scale="5" />
              <p v-if="stack.name">{{ stack.name }}</p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.stack-marquee-container
  position: relative
  width: 100%
  overflow: hidden

.fog-overlay
  position: absolute
  top: 0
  bottom: 0
  width: 12%
  z-index: 1
  pointer-events: none

.fog-overlay.left
  left: 0
  background: linear-gradient(to right, var(--fog-color) 25%, rgba(var(--fog-color-rgb), 0) 100%)


.fog-overlay.right
  right: 0
  background: linear-gradient(to left, var(--fog-color) 25%, rgba(var(--fog-color-rgb), 0) 100%)


.stack-marquee
  width: 100%
  overflow: hidden
  display: flex
  flex-direction: column
  align-items: center
  padding: 0 50px

.stack-row
  display: flex
  flex-direction: row
  white-space: nowrap
  margin-bottom: 32px
  width: 300%

.stack-row-inner
  display: flex
  animation: scroll 40s linear infinite

.stack-row.reverse .stack-row-inner
  animation-direction: reverse

@keyframes scroll
  0%
    transform: translateX(0)
  100%
    transform: translateX(-20%)

.stack-item
  width: 256px
  height: 250px
  flex: 0 0 auto
  margin-right: 20px
  background-color: var(--secondary-color)
  border-radius: 8px
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

p
  margin: 8px 0
  font-family: var(--text-title), sans-serif
  font-size: 18px

@media (max-width: 768px)
  .stack-item
    width: 170px
    height: 164px

  p
    font-size: 16px

@media (max-width: 480px)
  .stack-item
    width: 142px
    height: 142px

  p
    font-size: 12px

</style>