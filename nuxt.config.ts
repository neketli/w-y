import { presetIcons } from 'unocss'

export default defineNuxtConfig({
  modules: [
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@una-ui/nuxt',
  ],
  ssr: false,
  components: [
    { path: '~/components', pathPrefix: false },
  ],
  app: {
    baseURL: '/w-y/',
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/w-y/favicon.svg' },
      ],
      style: [
        {
          innerHTML: ':root{color-scheme:light}html{color-scheme:light!important}.dark,.dark :root{--una-background:1 0 0;--una-foreground:var(--una-gray-950);--una-primary:var(--una-primary-600);--una-primary-foreground:1 0 0;--una-primary-active:var(--una-primary-500);--una-gray:var(--una-gray-600);--una-gray-active:var(--una-gray-500);--una-secondary:var(--una-gray-100);--una-secondary-foreground:var(--una-gray-900);--una-muted:var(--una-gray-100);--una-muted-foreground:var(--una-gray-500);--una-accent:var(--una-gray-50);--una-accent-foreground:var(--una-gray-700);--una-card:1 0 0;--una-card-foreground:var(--una-gray-950);--una-input:var(--una-gray-200);--una-ring:var(--una-primary-400);--una-border:var(--una-gray-200);--una-popover:1 0 0;--una-popover-foreground:var(--una-gray-950)}',
        },
      ],
    },
  },
  appConfig: {
    una: {
      primary: 'rose-clay',
      gray: 'stone',
    },
  },
  compatibilityDate: '2026-07-10',
  nitro: {
    preset: 'github_pages',
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    families: [
      { name: 'Playfair Display', provider: 'google', weights: [400, 600, 700] },
      { name: 'Cormorant Garamond', provider: 'google', weights: [300, 400, 500] },
      { name: 'Raleway', provider: 'google', weights: [300, 400, 500] },
    ],
  },
  una: {
    prefix: 'N',
  },
  unocss: {
    presets: [
      presetIcons({
        scale: 1.2,
        collections: {
          ph: () => import('@iconify-json/ph/icons.json').then(i => i.default),
        },
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle',
        },
      }),
    ],
    shortcuts: {
      'section-container': 'w-full px-6 md:px-12 lg:px-24 xl:px-48 py-8 md:py-10',
      'section-label': 'font-sans text-xs tracking-[0.2em] uppercase text-rose-clay/60 mb-6 block',
      'heading-serif': 'font-display text-3xl md:text-4xl leading-tight',
      'text-body': 'font-sans text-sm md:text-base leading-relaxed text-stone-600',
      'polaroid': 'border-8 border-white shadow-lg bg-white',
    },
    theme: {
      colors: {
        'cream': {
          50: '#FDFBF7',
          100: '#FAF6EE',
          200: '#F5EDDB',
          300: '#EDDFC0',
          400: '#E0CDA0',
          500: '#D4BA82',
          600: '#C5A565',
          700: '#B08D4C',
          800: '#92733E',
          900: '#7A5E35',
        },
        'rose-clay': {
          DEFAULT: '#B4867A',
          50: '#FAF3F1',
          100: '#F2E3DE',
          200: '#E5C8BF',
          300: '#D5A79B',
          400: '#C49386',
          500: '#B4867A',
          600: '#9D6B5F',
          700: '#825449',
          800: '#6C453C',
          900: '#5A3932',
        },
        'olive-dark': '#4A5D4A',
        'olive-light': '#7A8F7A',
        'gold-soft': '#C9A96E',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Raleway', 'system-ui', 'sans-serif'],
      },
    },
    rules: [],
  },
})
