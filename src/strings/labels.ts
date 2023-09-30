import { EntryData } from '@/views/formData'
export const labels: { [key in keyof EntryData]: string[] } = {
  age: [],
  gender: [],
  q1: ['Головные боли', 'Боли в шее', 'Дискомфорт/боли в плечах и лопатках'],
  q2: [],
  q3: ['В покое', 'Во время приема пищи', 'После приема пищи'],
  q4: ['Да, ощущаю щёлкание', 'Да, ощущаю трение', 'Да, ощущаю боль'],
  q5: ['Да, часто', 'Да, редко', 'Нет'],
  q6: ['Да, часто', 'Да, редко', 'Нет'],
  q7: ['Да, часто', 'Да, редко', 'Нет'],
  q8: ['Да, имеют', 'Нет, не имеют'],
  q9: ['Да, бывает тревожность', 'Да, бывает раздражительность', 'Да, бывает нарушение сна'],
  q10: ['Да, посещал(а) невролога ', 'Да, посещал(а) психолога', 'Да, посещал(а) психиатра'],
  q11: [''],
  q12: ['Да, кружится голова', 'Да, закладывает уши', 'Да, слышу звон в одном (или обоих) ушах'],
  q13: ['Похож на звон', 'Похож на свист', 'Похож на треск'],
}

export const questions: { [key in keyof EntryData]: string } = {
  age: 'Ваш возраст:',
  gender: 'Ваш пол:',
  q1: 'Беспокоят ли Вас',
  q2: 'Какое давление вы считаете для себя нормой',
  q3: 'Беспокоят ли Вас боли в челюстях?',
  q4: 'Ощущаете ли Вы щёлкание, трение, боль при жевании в ВНЧС?',
  q5: 'Испытываете ли Вы напряженность, затруднение при открывании рта?',
  q6: 'Бывает ли у Вас стискивание и скрип зубами в ночное время или в моменты повышенной концентрации/стресса?',
  q7: 'Возникают ли у Вас болевые ощущения при смещении нижней челюсти вперед, в стороны?',
  q8: 'Имеют ли ваши зубы повышенную чувствительность?',
  q9: 'Бывает ли у вас тревожность, раздражительность, нарушение сна?',
  q10: 'Посещали ли Вы невролога, психолога, психиатра, по поводу неясных болей в области головы, лица, шеи',
  q11: 'Имеются ли у Вас заболевания ЛОР органов? (Ухо, горло, нос). Если да, укажите какие',
  q12: 'Случается ли у Вас головокружение, чувство заложенности в ушах, звон в одном или обоих ушах?',
  q13: 'Похож ли этот шум на звон, свист, треск?',
}
