<script setup lang="ts">
const config = useWeddingConfig()
</script>

<template>
  <section class="section-container text-center">
    <ScrollReveal>
      <SectionHeading label="Локация" />
    </ScrollReveal>

    <ScrollReveal :delay="100">
      <div class="rounded-2xl overflow-hidden mb-5 shadow-md border border-cream-200">
        <iframe
          :src="config.location.mapEmbedUrl"
          width="100%"
          height="220"
          style="border:0;"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Карта места проведения"
        />
      </div>
    </ScrollReveal>

    <ScrollReveal :delay="200">
      <h3 class="font-display text-xl text-stone-800 mb-1">
        {{ config.location.name }}
      </h3>
      <p class="font-sans text-sm text-stone-500 mb-1">
        {{ config.location.city }}
      </p>
      <p class="font-sans text-xs text-stone-400 mb-6">
        {{ config.location.address }}
      </p>
    </ScrollReveal>

    <ScrollReveal :delay="300">
      <a
        :href="config.location.mapUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <NButton btn="solid" size="lg">
          <span class="flex items-center gap-2">
            <span class="icon-[ph--map-pin-fill] text-base" />
            Открыть карту
          </span>
        </NButton>
      </a>
    </ScrollReveal>


  </section>
</template>
