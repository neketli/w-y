export interface WeddingConfig {
  couple: {
    groom: string
    bride: string
    display: string
  }
  date: {
    full: string
    day: number
    month: number
    year: number
    weekday: string
    monthName: string
  }
  intro: string
  location: {
    name: string
    address: string
    city: string
    mapUrl: string
    mapEmbedUrl: string
  }
  timingLine: string
  dressCode: {
    description: string
  }
  rsvp: {
    deadline: string
    deadlineLabel: string
  }
  gifts: string
  music: string
}

export function useWeddingConfig(): WeddingConfig {
  return {
    couple: {
      groom: 'Виталий',
      bride: 'Юлия',
      display: 'Виталий & Юлия',
    },
    date: {
      full: '11.09.2026',
      day: 11,
      month: 9,
      year: 2026,
      weekday: 'Пятница',
      monthName: 'Сентября',
    },
    intro: 'Дорогие гости! Для нас начинается новая глава жизни, и мы хотим разделить этот момент с самыми дорогими людьми. Мы будем рады видеть вас на нашем празднике!',
    location: {
      name: 'Benamar Hotel',
      address: 'ул. Ченцова, 12/42',
      city: 'Ростов-на-Дону, Нахичевань',
      mapUrl: 'https://yandex.com/maps/-/CTBm4HL9',
      mapEmbedUrl: 'https://www.google.com/maps?q=Ростов-на-Дону,+Гостинично+-+ресторанный+комплекс+Benamar+Hotel%26SPA&output=embed',
    },
    timingLine: 'Сбор гостей на праздник в 16:00',
    dressCode: {
      description: 'Для нас самое главное — ваше присутствие. Но мы будем очень признательны, если вы поддержите атмосферу праздника, выбрав наряд в коктейльном стиле.',
    },
    rsvp: {
      deadline: '01.08.2026',
      deadlineLabel: 'Пожалуйста, подтвердите присутствие до 1 августа 2026',
    },
    gifts: 'Нам будет очень приятно получить от вас подарок. Если вы сомневаетесь в выборе, мы будем рады денежному вкладу в наше семейное будущее.',
    music: 'Мы создаём плейлист для нашего вечера и будем рады, если вы добавите свою любимую песню, которая создаст особенное настроение.',
  }
}
