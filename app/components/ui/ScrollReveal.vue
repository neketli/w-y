<script setup lang="ts">
import { useScrollAnimation } from '~/composables/useScrollAnimation'

const props = withDefaults(defineProps<{
  delay?: number
  duration?: number
}>(), {
  delay: 0,
  duration: 700,
})

const { el, isVisible } = useScrollAnimation()

defineExpose({ el })
</script>

<template>
  <div
    ref="el"
    class="transition-all"
    :class="[
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    ]"
    :style="{
      transitionDuration: `${props.duration}ms`,
      transitionDelay: `${props.delay}ms`,
      transitionProperty: 'opacity, transform',
    }"
  >
    <slot />
  </div>
</template>
