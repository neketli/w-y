<script setup lang="ts">
const config = useWeddingConfig()
const { day, month, year, monthName } = config.date

const daysInMonth = 30
const firstDayOfWeek = new Date(year, month - 1, 1).getDay()
const offset = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1

const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
const emptyCells = Array.from({ length: offset }, (_, i) => i)
</script>

<template>
  <section class="section-container text-center">
    <ScrollReveal>
      <SectionHeading label="Дата" />
    </ScrollReveal>

    <ScrollReveal :delay="100">
      <div class="bg-white rounded-2xl shadow-lg shadow-stone-200/60 p-6 max-w-[280px] mx-auto">
        <div class="text-center mb-4">
          <span class="font-sans text-xs tracking-[0.2em] uppercase text-rose-clay/60">
            {{ monthName }} {{ year }}
          </span>
        </div>

        <div class="grid grid-cols-7 gap-1 text-center font-sans text-xs mb-2">
          <div v-for="d in ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']" :key="d" class="text-stone-400 py-1">
            {{ d }}
          </div>
        </div>

        <div class="grid grid-cols-7 gap-1 text-center font-sans text-sm">
          <div v-for="i in emptyCells" :key="'e-' + i" />
          <div
            v-for="d in days"
            :key="d"
            class="py-1.5 rounded-full transition-colors duration-200"
            :class="d === day
              ? 'bg-rose-clay text-white font-medium'
              : d < day
                ? 'text-stone-300'
                : 'text-stone-600 hover:bg-cream-100'
            "
          >
            {{ d }}
          </div>
        </div>

        <div class="mt-4 pt-3 border-t border-cream-200 text-center">
          <p class="font-display text-xl text-stone-800">
            {{ day }} {{ monthName?.toLowerCase() }} {{ year }}
          </p>
          <p class="font-sans text-xs text-rose-clay/60 mt-1">
            Ждём вас!
          </p>
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal :delay="200">
      <div class="mt-6 max-w-[320px] mx-auto bg-gradient-to-r from-rose-clay/10 via-rose-clay/20 to-rose-clay/10 rounded-xl p-5 border border-rose-clay/20">
        <div class="flex items-center justify-center gap-2.5">
          <span class="icon-[ph--clock-fill] text-xl text-rose-clay" />
          <span class="font-display text-xl font-semibold text-rose-clay">
            {{ config.timingLine }}
          </span>
        </div>
      </div>
    </ScrollReveal>
  </section>
</template>
