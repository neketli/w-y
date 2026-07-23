<script setup lang="ts">
import img1 from '~/assets/images/dress-code1.webp'
import img2 from '~/assets/images/dress-code2.webp'
import img3 from '~/assets/images/dress-code3.webp'

const config = useWeddingConfig()

useSeoMeta({
  title: `${config.couple.display} — Свадьба ${config.date.full}`,
  description: config.intro,
  ogTitle: `${config.couple.display} — Свадьба ${config.date.full}`,
  ogDescription: config.intro,
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100">
    <div class="w-full mx-auto bg-cream-50 min-h-screen">
      <HeroSection />
      <IntroSection />
      <DividerHeart />
      <CountdownCalendar />
      <DividerHeart />

      <section class="section-container text-center">
        <ScrollReveal>
          <SectionHeading label="Дресс-код" />
        </ScrollReveal>

        <ScrollReveal :delay="100">
          <div class="relative h-[320px] md:h-[380px] mx-auto mb-8 max-w-[340px]">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 z-30 polaroid rotate-2 shadow-lg">
              <img :src="img2" alt="Дресс-код фото 2" class="w-36 md:w-40 aspect-[3/4] object-cover" />
            </div>
            <div class="absolute bottom-0 left-0 z-10 polaroid -rotate-3 shadow-lg">
              <img :src="img1" alt="Дресс-код фото 1" class="w-36 md:w-40 aspect-[3/4] object-cover" />
            </div>
            <div class="absolute bottom-0 right-0 z-20 polaroid rotate-3 shadow-lg">
              <img :src="img3" alt="Дресс-код фото 3" class="w-36 md:w-40 aspect-[3/4] object-cover" />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal :delay="200">
          <p class="text-body text-base leading-loose max-w-sm mx-auto">
            {{ config.dressCode.description }}
          </p>
        </ScrollReveal>
      </section>

      <DividerHeart />
      <LocationSection />
      <DividerHeart />
      <GiftsSection />
      <DividerHeart />
      <RsvpSection />
      <DividerHeart />

      <footer class="section-container text-center pt-0 pb-10">
        <p class="font-script text-lg text-rose-clay/60 italic">
          {{ config.couple.display }}
        </p>
        <p class="font-sans text-xs text-stone-400 mt-3">
          {{ config.date.full }}
        </p>
      </footer>
    </div>
  </div>
</template>
