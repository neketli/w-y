<script setup lang="ts">
const config = useWeddingConfig()
</script>

<template>
  <section class="section-container text-center">
    <ScrollReveal>
      <SectionHeading label="Подарки" />
    </ScrollReveal>

    <ScrollReveal :delay="100">
      <div class="text-4xl mb-6 text-rose-clay/60">
        <span class="icon-[ph--gift-fill]" />
      </div>
    </ScrollReveal>

    <ScrollReveal :delay="200">
      <p class="text-body text-base leading-loose max-w-sm mx-auto">
        {{ config.gifts }}
      </p>
    </ScrollReveal>
  </section>
</template>
