# Wedding Invitation — Свадебное приглашение

Одностраничный сайт-приглашение на свадьбу. Нежная, романтичная эстетика — мобильная визитка для гостей.

**Демо**: https://neketli.github.io/wdvue/

---

## Стек

- **Nuxt 4** — SSG (генерация статики для GitHub Pages)
- **UnoCSS** — утилитарные классы (Tailwind-совместимые), иконки (Phosphor), кастомная тема
- **Vue 3** — Composition API, `<script setup>`
- **TypeScript** — строгий режим
- **vee-validate + zod** — валидация формы RSVP
- **@nuxt/fonts** — self-hosted Google Fonts (Playfair Display, Cormorant Garamond, Raleway)

## Быстрый старт

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Сценарии

| Команда | Назначение |
|---|---|
| `pnpm dev` | Dev-сервер с HMR |
| `pnpm build` | Production-сборка |
| `pnpm generate` | SSG-генерация в `.output/public` |
| `pnpm preview` | Превью собранного сайта |
| `pnpm lint` | ESLint проверка |
| `pnpm lint:fix` | ESLint с автофиксом |
| `pnpm format` | Prettier проверка |
| `pnpm format:fix` | Prettier форматирование |
| `pnpm typecheck` | vue-tsc проверка типов |
| `pnpm validate` | lint + typecheck |

## Структура

```
├── app/
│   ├── components/
│   │   ├── sections/       # Секции страницы (Hero, Intro, Timeline, RSVP…)
│   │   └── ui/             # Переиспользуемые UI (DividerHeart, PolaroidPhoto…)
│   ├── composables/
│   │   ├── useWeddingConfig.ts   # Конфиг пары — поменяйте данные здесь
│   │   └── useScrollAnimation.ts # IntersectionObserver для анимаций
│   └── pages/index.vue
├── uno.config.ts           # Кастомная палитра, шрифты, шорткаты
├── nuxt.config.ts          # SSG, GitHub Pages, модули
└── .github/workflows/deploy.yml  # CI/CD → GitHub Pages
```

## Кастомизация

Все данные (имена, дата, локация, тайминг, контакты и т.д.) — в одном файле:

```
app/composables/useWeddingConfig.ts
```

Поменяйте значения под свою пару — и сайт готов.

## Дизайн

- Mobile-first, контент в窄кой колонке (имитация экрана телефона)
- Палитра: бежево-кремовые оттенки, акцентный rose-clay
- Serif-шрифты для заголовков, sans-serif для текста
- Scroll-reveal анимации через IntersectionObserver
- Полароид-фото с поворотом
- Сердечки-разделители между секциями

## Деплой

1. В репозитории: Settings → Pages → Source → **GitHub Actions**
2. При пуше в `main` — автоматический деплой через `.github/workflows/deploy.yml`
3. Результат: `https://<user>.github.io/<repo>/`

---

[Виталик & Юлия](https://neketli.github.io/wdvue/) • 11.09.2026
