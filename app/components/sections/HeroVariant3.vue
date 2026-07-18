<script setup lang="ts">
import groomImage from '~/assets/images/groom.png'
import brideImage from '~/assets/images/bride.png'

const config = useWeddingConfig()
const { groom, bride } = config.couple
const { full } = config.date
</script>

<template>
  <section class="min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden">
    <ScrollReveal :duration="800" class="relative min-h-[50vh] md:min-h-screen bg-gradient-to-br from-rose-clay/20 via-cream-200 to-rose-clay/10 flex items-center justify-center overflow-hidden">
      <div class="relative w-full max-w-sm aspect-[4/5] flex items-center justify-center">
        <div class="polaroid rotate-[-6deg] z-10 shadow-xl absolute top-1/6 left-8">
          <img :src="brideImage" alt="Невеста" class="w-48 md:w-64 aspect-[3/4] object-cover" />
        </div>
        <div class="polaroid rotate-[8deg] z-20 shadow-xl absolute top-1/3 right-4">
          <img :src="groomImage" alt="Жених" class="w-36 md:w-48 aspect-[3/4] object-cover" />
        </div>
      </div>
      <div class="absolute inset-0 border-[12px] border-cream-50/30 pointer-events-none" />
    </ScrollReveal>

    <div class="flex flex-col items-center justify-center text-center p-8 md:p-16 bg-gradient-to-b from-cream-50 to-white">
      <ScrollReveal :delay="200">
        <span class="font-sans text-[10px] tracking-[0.4em] uppercase text-rose-clay/50 mb-6 block">
          Приглашение на свадьбу
        </span>
      </ScrollReveal>

      <ScrollReveal :delay="400">
        <h1 class="font-display text-5xl md:text-7xl leading-[1.1]">
          <span class="block text-stone-800">{{ groom }}</span>
          <span class="block text-rose-clay/40 text-3xl font-script italic my-1">&</span>
          <span class="block text-stone-800">{{ bride }}</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal :delay="600">
        <div class="w-12 h-px bg-rose-clay/30 my-6" />
      </ScrollReveal>

      <ScrollReveal :delay="700">
        <p class="font-script text-2xl text-rose-clay italic">{{ full }}</p>
      </ScrollReveal>

      <ScrollReveal :delay="1000">
        <div class="mt-12 animate-bounce text-rose-clay/30">
          <span class="icon-[ph--caret-down-fill] text-2xl" />
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
