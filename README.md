# Портфолио — Илья Шкарин

Веб-разработчик для малого и среднего бизнеса.

## Быстрый старт

### 1. Установите зависимости
```bash
npm install
```

### 2. Запустите локально
```bash
npm run dev
```
Откройте [http://localhost:3000](http://localhost:3000)

### 3. Собрать для production
```bash
npm run build
npm start
```

---

## Как редактировать контент

**Весь контент сайта находится в одном файле:**
```
lib/data.ts
```

Там вы найдёте:
- `siteConfig` — имя, email, Telegram, LinkedIn
- `metrics` — числа в секции «Результаты»
- `projects` — ваши проекты (название, индустрия, метрика, описание)
- `processSteps` — этапы работы
- `stack` — технологии (Frontend / Backend / Business Tools)
- `testimonials` — отзывы клиентов
- `services` — услуги и цены
- `about` — текст раздела «Об авторе»

---

## Как добавить реальные фото

### Фото автора
1. Положите фото в `public/images/author.jpg`
2. В `components/sections/About.tsx` замените заглушку на:
```tsx
import Image from 'next/image'
// ...
<Image src="/images/author.jpg" alt="Илья Шкарин" fill className="object-cover" />
```

### Скриншоты проектов
1. Положите скриншоты в `public/images/project-*.jpg`
2. В `components/ui/ProjectCard.tsx` замените заглушку-мокап на:
```tsx
import Image from 'next/image'
// ...
<Image src={project.image} alt={project.title} fill className="object-cover" />
```

---

## Деплой на Vercel (бесплатно)

1. Создайте аккаунт на [vercel.com](https://vercel.com)
2. Установите Vercel CLI: `npm i -g vercel`
3. В папке проекта выполните: `vercel`
4. Следуйте инструкциям — сайт будет онлайн за 2 минуты

### Или через GitHub (рекомендуется):
1. Загрузите проект на GitHub
2. В Vercel: «New Project» → выберите репозиторий
3. Нажмите «Deploy» — готово
4. При каждом `git push` сайт обновляется автоматически

---

## Структура проекта

```
portfolio/
├── app/
│   ├── globals.css       ← дизайн-система, CSS-переменные
│   ├── layout.tsx        ← шрифты, метаданные
│   └── page.tsx          ← главная страница
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    ← навигация
│   │   └── Footer.tsx    ← подвал
│   ├── sections/         ← все секции сайта
│   └── ui/               ← кнопки, курсор, счётчики
├── lib/
│   └── data.ts           ← ВСЕ ТЕКСТЫ И ДАННЫЕ ЗДЕСЬ
└── public/
    └── images/           ← ваши фото и скриншоты
```

---

## Технологии

- **Next.js 14** — React фреймворк
- **Tailwind CSS** — стили
- **Framer Motion** — анимации
- **TypeScript** — типизация

---

Сделано без Tilda. С любовью к коду.
