'use client'
import classNames from 'classnames'
import { createContext } from 'react'
import styles from '../../styles/layout.module.css'
import Question from '../components/QuestionComponent'

export const QuestionNumberContext = createContext(0)

export default function Page() {
  const containerClasses = classNames(styles['grid-header'], styles.centered)
  return (
    <QuestionNumberContext.Provider value={0}>
      <h1 className={containerClasses}>Анкета для выявления патологий ВНЧС</h1>
      <Question
        text={'Беспокоят ли Вас'}
        answers={[
          'Головные боли',
          'Боли в шее',
          'Дискомфорт/боли в плечах и лопатках',
        ]}
      />
      <Question
        text={'Какое давление вы считаете для себя нормой'}
        answers={['']}
      />
      <Question
        text={'Беспокоят ли Вас боли в челюстях?'}
        answers={[
          'В покое',
          'Во время приема пищи',
          'После приема пищи',
          'Не беспокоит',
        ]}
      />
      <Question
        text={'Ощущаете ли Вы щёлкание, трение, боль при жевании в ВНЧС?'}
        answers={[
          'Да, ощущаю щёлкание',
          'Да, ощущаю трение',
          'Да, ощущаю боль',
          'Нет, не ощущаю',
        ]}
      />
      <Question
        text={
          'Испытываете ли Вы напряженность, затруднение при открывании рта?'
        }
        answers={['Да, часто', 'Да, редко', 'Нет']}
      />
      <Question
        text={
          'Бывает ли у Вас стискивание и скрип зубами в ночное время или в моменты повышенной концентрации/стресса?'
        }
        answers={['Да, часто', 'Да, редко', 'Нет']}
      />
      <Question
        text={
          'Возникают ли у Вас болевые ощущения при смещении нижней челюсти вперед, в стороны?'
        }
        answers={['Да, часто', 'Да, редко', 'Нет']}
      />
      <Question
        text={'Имеют ли ваши зубы повышенную чувствительность?'}
        answers={['Да, имеют', 'Нет, не имеют']}
      />
      <Question
        text={'Бывает ли у вас тревожность, раздражительность, нарушение сна?'}
        answers={[
          'Да, бывает тревожность',
          'Да, бывает раздражительность',
          'Да, бывает нарушение сна',
          'Нет, не бывает',
        ]}
      />
      <Question
        text={
          'Посещали ли Вы невролога, психолога, психиатра, по поводу неясных болей в области головы, лица, шеи.'
        }
        answers={[
          'Да, посещал(а) невролога ',
          'Да, посещал(а) психолога',
          'Да, посещал(а) психиатра',
          'Нет, не посещал(а)',
        ]}
      />
      <Question
        text={'Имеются ли у Вас заболевания ЛОР органов? (Ухо, горло, нос).'}
        answers={['']}
      />
      <Question
        text={
          'Случается ли у Вас головокружение, чувство заложенности в ушах, звон в одном или обоих ушах?'
        }
        answers={[
          'Да, кружится голова',
          'Да, закладывает уши',
          'Да, слышу звон в одном (или обоих) ушах',
          'Нет, не случается',
        ]}
      />
      <Question
        text={'Похож ли этот шум на звон, свист, треск?'}
        answers={['']}
      />
    </QuestionNumberContext.Provider>
  )
}
