'use client'
import classNames from 'classnames'
import styles from '../../styles/layout.module.css'
import { Question } from '../components/question'

export default function Page() {
  const containerClasses = classNames(styles['grid-header'], styles.centered)
  let num = 1
  return (
    <>
      <h1 className={containerClasses}>Анкета для выявления патологий ВНЧС</h1>
      <Question
        text={'Беспокоят ли Вас'}
        answerLabels={[
          'Головные боли',
          'Боли в шее',
          'Дискомфорт/боли в плечах и лопатках',
        ]}
        nothing={'Ничего из вышеперечисленного'}
        type="list"
        questionNum={num++}
      />
      <Question
        text={'Какое давление вы считаете для себя нормой'}
        answerLabels={['110\\70']}
        type="textfield"
        questionNum={num++}
      />
      <Question
        text={'Беспокоят ли Вас боли в челюстях?'}
        answerLabels={['В покое', 'Во время приема пищи', 'После приема пищи']}
        nothing={'Не беспокоит'}
        type="list"
        questionNum={num++}
      />
      <Question
        text={'Ощущаете ли Вы щёлкание, трение, боль при жевании в ВНЧС?'}
        answerLabels={[
          'Да, ощущаю щёлкание',
          'Да, ощущаю трение',
          'Да, ощущаю боль',
        ]}
        nothing={'Нет, не ощущаю'}
        type="list"
        questionNum={num++}
      />
      <Question
        text={
          'Испытываете ли Вы напряженность, затруднение при открывании рта?'
        }
        answerLabels={['Да, часто', 'Да, редко', 'Нет']}
        type="radio"
        questionNum={num++}
      />
      <Question
        text={
          'Бывает ли у Вас стискивание и скрип зубами в ночное время или в моменты повышенной концентрации/стресса?'
        }
        answerLabels={['Да, часто', 'Да, редко', 'Нет']}
        type="radio"
        questionNum={num++}
      />
      <Question
        text={
          'Возникают ли у Вас болевые ощущения при смещении нижней челюсти вперед, в стороны?'
        }
        answerLabels={['Да, часто', 'Да, редко', 'Нет']}
        type="radio"
        questionNum={num++}
      />
      <Question
        text={'Имеют ли ваши зубы повышенную чувствительность?'}
        answerLabels={['Да, имеют', 'Нет, не имеют']}
        type="radio"
        questionNum={num++}
      />
      <Question
        text={'Бывает ли у вас тревожность, раздражительность, нарушение сна?'}
        answerLabels={[
          'Да, бывает тревожность',
          'Да, бывает раздражительность',
          'Да, бывает нарушение сна',
        ]}
        nothing={'Нет, не бывает'}
        type="list"
        questionNum={num++}
      />
      <Question
        text={
          'Посещали ли Вы невролога, психолога, психиатра, по поводу неясных болей в области головы, лица, шеи.'
        }
        answerLabels={[
          'Да, посещал(а) невролога ',
          'Да, посещал(а) психолога',
          'Да, посещал(а) психиатра',
        ]}
        nothing={'Нет, не посещал(а)'}
        type="list"
        questionNum={num++}
      />
      <Question
        text={
          'Имеются ли у Вас заболевания ЛОР органов? (Ухо, горло, нос). Если да, укажите какие.'
        }
        answerLabels={['синусит, гайморит']}
        type="textfield"
        questionNum={num++}
      />
      <Question
        text={
          'Случается ли у Вас головокружение, чувство заложенности в ушах, звон в одном или обоих ушах?'
        }
        answerLabels={[
          'Да, кружится голова',
          'Да, закладывает уши',
          'Да, слышу звон в одном (или обоих) ушах',
        ]}
        nothing={'Нет, не случается'}
        type="list"
        questionNum={num++}
      />
      <Question
        text={'Похож ли этот шум на звон, свист, треск?'}
        answerLabels={['Похож на звон', 'Похож на свист', 'Похож на треск']}
        nothing="Нет шума"
        type="list"
        questionNum={num++}
      />
    </>
  )
}
