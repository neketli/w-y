<script setup lang="ts">
const config = useWeddingConfig()
</script>

<template>
  <section class="section-container text-center">
    <ScrollReveal>
      <SectionHeading label="">
        <template #default>
          <p class="font-script text-2xl text-rose-clay italic mb-6">
            Дорогие гости!
          </p>
        </template>
      </SectionHeading>
    </ScrollReveal>

    <ScrollReveal :delay="200">
      <p class="text-body text-base leading-loose max-w-sm mx-auto">
        {{ config.intro }}
      </p>
    </ScrollReveal>


  </section>
</template>
