// ─────────────────────────────────────────────
// PORTFOLIO CONTENT DATA
// Редактируйте этот файл чтобы изменить весь контент сайта
// ─────────────────────────────────────────────

export const siteConfig = {
  name: 'Илья Шкарин',
  nameEn: 'Ilya Shkarin',
  title: 'Веб-разработчик',
  tagline: 'для бизнеса, который растёт.',
  subTagline: 'Сайты, которые работают на вас 24/7 — не просто красивые страницы.',
  telegram: 'https://t.me/shkarnuxa',
  email: 'iliashkarin@yandex.ru',
  linkedin: 'https://linkedin.com/in/shkarin',
  location: 'Иннополис / Remote',
  responseTime: 'Отвечаю в течение 24 часов',
  availability: 'Доступен к проектам',
}

// ─────────────────────────────────────────────
// METRICS (Hero + Metrics section)
// ─────────────────────────────────────────────
export const metrics = [
  { value: 80, suffix: '+', label: 'клиентов', sublabel: 'из 10+ индустрий' },
  { value: 5,  suffix: '+', label: 'лет опыта', sublabel: 'с 2019 года' },
  { value: 94, suffix: '%', label: 'NPS-score', sublabel: 'рекомендуют' },
  { value: 3,  suffix: '×', label: 'рост конверсий', sublabel: 'в среднем по проектам' },
]

// ─────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────
export type Project = {
  id: string
  title: string
  industry: string
  category: string
  description: string
  url?: string
  image: string
  color: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'chistopro',
    title: 'ЧистоПро',
    industry: 'Детейлинг',
    category: 'services',
    description: 'Сайт с онлайн-записью, калькулятором стоимости услуг и галереей работ «до/после». Клиент получает автоматическое напоминание о визите — без звонков администратора.',
    image: '/images/project-chistopro.jpg',
    color: '#0F1318',
    featured: true,
  },
  {
    id: 'botanika',
    title: 'Ботаника',
    industry: 'Цветочный магазин',
    category: 'retail',
    description: 'Интернет-магазин с каталогом, фильтром по поводу и бюджету, оформлением заказа за 2 клика. Интеграция с курьерской службой — доставка день в день.',
    image: '/images/project-botanika.jpg',
    color: '#0A130F',
    featured: true,
  },
  {
    id: 'ulibka',
    title: 'Клиника Улыбки',
    industry: 'Стоматология',
    category: 'services',
    description: 'Корпоративный сайт с профилями врачей, онлайн-записью на приём и страницами услуг с ценами. Акцент на доверие: сертификаты, фото клиники, реальные отзывы.',
    image: '/images/project-ulibka.jpg',
    color: '#0D1218',
    featured: false,
  },
  {
    id: 'svoya-vypechka',
    title: 'Своя выпечка',
    industry: 'Пекарня',
    category: 'horeca',
    description: 'Сайт-витрина с ежедневным меню и системой предзаказа. Покупатели видят, что есть прямо сейчас — без звонков. Подключена доставка и самовывоз.',
    image: '/images/project-vypechka.jpg',
    color: '#18100A',
    featured: false,
  },
  {
    id: 'forma',
    title: 'Форма',
    industry: 'Барбершоп',
    category: 'services',
    description: 'Лендинг с онлайн-записью к конкретному мастеру и портфолио работ. Каждый мастер — отдельная карточка с фото, специализацией и свободными слотами.',
    image: '/images/project-forma.jpg',
    color: '#100F14',
    featured: false,
  },
]

export const categories = [
  { id: 'all', label: 'Все' },
  { id: 'retail', label: 'Ритейл' },
  { id: 'horeca', label: 'HoReCa' },
  { id: 'services', label: 'Услуги' },
]


// ─────────────────────────────────────────────
// PROCESS STEPS
// ─────────────────────────────────────────────
export const processSteps = [
  {
    number: '01',
    title: 'Брифинг',
    duration: '1–2 дня',
    description: 'Погружаюсь в ваш бизнес: аудитория, конкуренты, цели. Изучаю, что мешает сайту продавать прямо сейчас.',
    deliverable: 'Стратегический бриф',
  },
  {
    number: '02',
    title: 'Стратегия',
    duration: '3–5 дней',
    description: 'Прорабатываю структуру, пользовательский путь и UX-логику. Определяем, как сайт будет конвертировать.',
    deliverable: 'Sitemap + Wireframes',
  },
  {
    number: '03',
    title: 'Дизайн',
    duration: '5–10 дней',
    description: 'Создаю визуальный образ: типографика, цвет, компоновка. Все экраны — десктоп и мобайл. Вы видите и принимаете до начала разработки.',
    deliverable: 'Figma-прототип',
  },
  {
    number: '04',
    title: 'Разработка',
    duration: '10–20 дней',
    description: 'Верстаю и программирую. Pixel-perfect реализация дизайна, анимации, интеграции с CRM, CMS и сервисами.',
    deliverable: 'Готовый сайт',
  },
  {
    number: '05',
    title: 'Запуск & Поддержка',
    duration: 'Ongoing',
    description: 'Настраиваю хостинг, аналитику и SEO. После запуска — 30 дней бесплатной поддержки. Дальше — по договорённости.',
    deliverable: 'Живой сайт + метрики',
  },
]

// ─────────────────────────────────────────────
// TECH STACK
// ─────────────────────────────────────────────
export const stack = {
  frontend: [
    { name: 'Next.js', note: 'SSR/SSG для SEO и скорости' },
    { name: 'React', note: 'UI-компоненты и интерактивность' },
    { name: 'TypeScript', note: 'Надёжный, масштабируемый код' },
    { name: 'Tailwind CSS', note: 'Быстрая адаптивная вёрстка' },
    { name: 'Framer Motion', note: 'Анимации без потери Lighthouse' },
    { name: 'GSAP', note: 'Сложные scroll-анимации' },
  ],
  backend: [
    { name: 'Node.js', note: 'API и серверная логика' },
    { name: 'Supabase', note: 'База данных + авторизация' },
    { name: 'Sanity CMS', note: 'Редактируемый контент для клиента' },
    { name: 'Vercel', note: 'Deploy, CDN, Edge Functions' },
    { name: 'Resend', note: 'Email-транзакции и уведомления' },
  ],
  business: [
    { name: 'amoCRM', note: 'Интеграция с воронкой продаж' },
    { name: 'Bitrix24', note: 'B2B-автоматизация заявок' },
    { name: 'Tilda → Custom', note: 'Миграция с конструкторов' },
    { name: 'Яндекс.Метрика', note: 'Аналитика и карты кликов' },
    { name: 'Google Analytics', note: 'GA4, события, конверсии' },
  ],
}

// ─────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    quote: 'Илья — первый разработчик, который вместо вопроса «какой дизайн хотите?» спросил «сколько заявок в месяц хотите получать?». Через 2 недели после запуска у нас +47 броней только с сайта.',
    name: 'Анастасия Волкова',
    role: 'Владелец',
    company: 'Ресторан Bonheur',
    avatar: '/images/avatar-1.jpg',
  },
  {
    id: 2,
    quote: 'Работаем с Ильёй уже 2 года на поддержке. Он отвечает быстрее некоторых наших сотрудников. Для нашего B2B-бизнеса сайт стал реальным каналом привлечения.',
    name: 'Дмитрий Захаров',
    role: 'Генеральный директор',
    company: 'Legal Partners',
    avatar: '/images/avatar-2.jpg',
  },
  {
    id: 3,
    quote: 'Сделали сайт за 3 недели вместо 6, как обещали другие. И главное — он действительно работает: клиенты записываются онлайн без звонков. Сэкономили на администраторе.',
    name: 'Мария Соколова',
    role: 'Основатель',
    company: 'FitLab Studio',
    avatar: '/images/avatar-3.jpg',
  },
]

// ─────────────────────────────────────────────
// SERVICES / PRICING
// ─────────────────────────────────────────────
export const services = [
  {
    id: 'start',
    name: 'Старт',
    subtitle: 'Визитка или лендинг',
    description: 'Идеально для нового бизнеса или продукта. Одностраничный сайт, который объясняет, убеждает и конвертирует.',
    price: 'от 80 000 ₽',
    duration: '2–3 недели',
    includes: [
      'До 7 экранов',
      'Адаптивная вёрстка',
      'Форма заявки + уведомления',
      'SEO-базовая оптимизация',
      '30 дней поддержки',
    ],
    cta: 'Обсудить проект',
    highlighted: false,
  },
  {
    id: 'growth',
    name: 'Рост',
    subtitle: 'Корпоративный сайт',
    description: 'Многостраничный сайт с личным кабинетом, CRM-интеграцией и системой управления контентом. Инструмент роста, а не визитка.',
    price: 'от 200 000 ₽',
    duration: '4–6 недель',
    includes: [
      'Неограниченное количество страниц',
      'CMS (редактируете сами)',
      'CRM / amoCRM / Bitrix24',
      'Онлайн-оплата или бронирование',
      'SEO + аналитика',
      '60 дней поддержки',
    ],
    cta: 'Это то, что мне нужно',
    highlighted: true,
  },
  {
    id: 'partner',
    name: 'Партнёрство',
    subtitle: 'Долгосрочная поддержка',
    description: 'Для бизнеса, которому нужен свой разработчик без найма в штат. Фиксированное количество часов в месяц, приоритетный ответ, развитие сайта.',
    price: 'Обсудим',
    duration: 'Ongoing',
    includes: [
      'Фиксированные часы/месяц',
      'Приоритетная поддержка',
      'A/B-тестирование',
      'Ежемесячный отчёт по метрикам',
      'Стратегические рекомендации',
    ],
    cta: 'Написать',
    highlighted: false,
  },
]

// ─────────────────────────────────────────────
// CLIENT LOGOS (для marquee)
// ─────────────────────────────────────────────
export const clientLogos = [
  'Bonheur', 'Legal Partners', 'FitLab', 'Moda Moskva',
  'Стройкомплект', 'The Coffeehouse', 'ПравоТех', 'NordStyle',
  'Мастер Кофе', 'АрендаПро', 'GreenHouse', 'TechServ',
]

// ─────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────
export const about = {
  name: 'Илья Шкарин',
  intro: 'Мне 18 лет, я учусь в Лицее Иннополис и занимаюсь веб-разработкой уже 3 года.',
  body: `За это время я успел поработать с малым и средним бизнесом — ресторанами, юридическими фирмами, фитнес-студиями и интернет-магазинами. Каждый раз — сайт как инструмент, а не украшение.`,
  fact: '',
  photo: '/images/author.jpg',
  cvUrl: '',
}
