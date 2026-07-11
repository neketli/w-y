<script setup lang="ts">
defineProps<{
  label: string
  title?: string
}>()
</script>

<template>
  <div class="text-center mb-10">
    <span class="section-label">{{ label }}</span>
    <h2 v-if="title" class="heading-serif text-stone-800">
      {{ title }}
    </h2>
    <slot />
  </div>
</template>
