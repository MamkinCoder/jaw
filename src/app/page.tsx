'use client'
import { ListAnswer } from '@/components/answers/listAnswer'
import { RadioAnswer } from '@/components/answers/radioAnswer'
import { TextFieldAnswer } from '@/components/answers/textFieldAnswer'
import classNames from 'classnames'
import styles from '../../styles/layout.module.css'
import { Question } from '../components/question'

export default function Page() {
  const containerClasses = classNames(styles['grid-header'], styles.centered)
  let num = 1
  return (
    <>
      <h1 className={containerClasses}>Анкета для выявления патологий ВНЧС</h1>
      <Question text={'Беспокоят ли Вас'} questionNum={num++}>
        <ListAnswer
          labels={['Головные боли', 'Боли в шее', 'Дискомфорт/боли в плечах и лопатках']}
          nothing={'Ничего из вышеперечисленного'}
        />
      </Question>
      <Question text={'Какое давление вы считаете для себя нормой'} questionNum={num++}>
        <TextFieldAnswer labels={['110\\70']} />
      </Question>
      <Question text={'Беспокоят ли Вас боли в челюстях?'} questionNum={num++}>
        <ListAnswer
          labels={['В покое', 'Во время приема пищи', 'После приема пищи']}
          nothing={'Не беспокоит'}
        />
      </Question>
      <Question
        text={'Ощущаете ли Вы щёлкание, трение, боль при жевании в ВНЧС?'}
        questionNum={num++}
      >
        <ListAnswer
          labels={['Да, ощущаю щёлкание', 'Да, ощущаю трение', 'Да, ощущаю боль']}
          nothing={'Нет, не ощущаю'}
        />
      </Question>
      <Question
        text={'Испытываете ли Вы напряженность, затруднение при открывании рта?'}
        questionNum={num++}
      >
        <RadioAnswer labels={['Да, часто', 'Да, редко', 'Нет']} />
      </Question>
      <Question
        text={
          'Бывает ли у Вас стискивание и скрип зубами в ночное время или в моменты повышенной концентрации/стресса?'
        }
        questionNum={num++}
      >
        <RadioAnswer labels={['Да, часто', 'Да, редко', 'Нет']} />
      </Question>
      <Question
        text={'Возникают ли у Вас болевые ощущения при смещении нижней челюсти вперед, в стороны?'}
        questionNum={num++}
      >
        <RadioAnswer labels={['Да, часто', 'Да, редко', 'Нет']} />
      </Question>
      <Question text={'Имеют ли ваши зубы повышенную чувствительность?'} questionNum={num++}>
        <RadioAnswer labels={['Да, имеют', 'Нет, не имеют']} />
      </Question>
      <Question
        text={'Бывает ли у вас тревожность, раздражительность, нарушение сна?'}
        questionNum={num++}
      >
        <ListAnswer
          labels={[
            'Да, бывает тревожность',
            'Да, бывает раздражительность',
            'Да, бывает нарушение сна',
          ]}
          nothing={'Нет, не бывает'}
        />
      </Question>
      <Question
        text={
          'Посещали ли Вы невролога, психолога, психиатра, по поводу неясных болей в области головы, лица, шеи.'
        }
        questionNum={num++}
      >
        <ListAnswer
          labels={[
            'Да, посещал(а) невролога ',
            'Да, посещал(а) психолога',
            'Да, посещал(а) психиатра',
          ]}
          nothing={'Нет, не посещал(а)'}
        />
      </Question>
      <Question
        text={
          'Имеются ли у Вас заболевания ЛОР органов? (Ухо, горло, нос). Если да, укажите какие.'
        }
        questionNum={num++}
      >
        <TextFieldAnswer labels={['синусит, гайморит']} />
      </Question>
      <Question
        text={
          'Случается ли у Вас головокружение, чувство заложенности в ушах, звон в одном или обоих ушах?'
        }
        questionNum={num++}
      >
        <ListAnswer
          labels={[
            'Да, кружится голова',
            'Да, закладывает уши',
            'Да, слышу звон в одном (или обоих) ушах',
          ]}
          nothing={'Нет, не случается'}
        />
      </Question>
      <Question text={'Похож ли этот шум на звон, свист, треск?'} questionNum={num++}>
        <ListAnswer
          labels={['Похож на звон', 'Похож на свист', 'Похож на треск']}
          nothing="Нет шума"
        />
      </Question>
    </>
  )
}
