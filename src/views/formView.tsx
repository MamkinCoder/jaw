import { AgeGender } from '@/components/ageGender'
import { ListAnswer } from '@/components/answers/listAnswer'
import { PressureAnswer } from '@/components/answers/pressureAnswer'
import { RadioAnswer } from '@/components/answers/radioAnswer'
import { TextFieldAnswer } from '@/components/answers/textFieldAnswer'
import { Question } from '@/components/question'
import classNames from 'classnames'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styles from 'styles/layout.module.css'
import { FormData } from './formData'

interface FormViewProps {}

export function FormView({}: FormViewProps) {
  const containerClasses = classNames(styles['grid-header'], styles.centered)
  let num = 1

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['grid-container']}>
      <h1 className={containerClasses}>Анкета для выявления патологий ВНЧС</h1>
      <AgeGender />
      <Question text={'Беспокоят ли Вас'} questionNum={num++}>
        <Controller
          control={control} // control prop from useForm()
          name="q1"
          render={({ field: { onChange, value } }) => (
            <ListAnswer
              onChange={onChange}
              value={value}
              labels={['Головные боли', 'Боли в шее', 'Дискомфорт/боли в плечах и лопатках']}
              nothing={'Ничего из вышеперечисленного'}
            />
          )}
        />
      </Question>
      <Question text={'Какое давление вы считаете для себя нормой'} questionNum={num++}>
        <PressureAnswer {...register('q2')} />
      </Question>
      <Question text={'Беспокоят ли Вас боли в челюстях?'} questionNum={num++}>
        <ListAnswer
          labels={['В покое', 'Во время приема пищи', 'После приема пищи']}
          nothing={'Не беспокоит'}
          {...register('q3')}
        />
      </Question>
      <Question
        text={'Ощущаете ли Вы щёлкание, трение, боль при жевании в ВНЧС?'}
        questionNum={num++}
      >
        <ListAnswer
          labels={['Да, ощущаю щёлкание', 'Да, ощущаю трение', 'Да, ощущаю боль']}
          nothing={'Нет, не ощущаю'}
          {...register('q4')}
        />
      </Question>
      <Question
        text={'Испытываете ли Вы напряженность, затруднение при открывании рта?'}
        questionNum={num++}
      >
        <RadioAnswer labels={['Да, часто', 'Да, редко', 'Нет']} {...register('q5')} />
      </Question>
      <Question
        text={
          'Бывает ли у Вас стискивание и скрип зубами в ночное время или в моменты повышенной концентрации/стресса?'
        }
        questionNum={num++}
      >
        <RadioAnswer labels={['Да, часто', 'Да, редко', 'Нет']} {...register('q6')} />
      </Question>
      <Question
        text={'Возникают ли у Вас болевые ощущения при смещении нижней челюсти вперед, в стороны?'}
        questionNum={num++}
      >
        <RadioAnswer labels={['Да, часто', 'Да, редко', 'Нет']} {...register('q7')} />
      </Question>
      <Question text={'Имеют ли ваши зубы повышенную чувствительность?'} questionNum={num++}>
        <RadioAnswer labels={['Да, имеют', 'Нет, не имеют']} {...register('q8')} />
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
          {...register('q9')}
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
          {...register('q10')}
        />
      </Question>
      <Question
        text={
          'Имеются ли у Вас заболевания ЛОР органов? (Ухо, горло, нос). Если да, укажите какие.'
        }
        questionNum={num++}
      >
        <TextFieldAnswer label={'синусит, гайморит'} {...register('q11')} />
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
          {...register('q12')}
        />
      </Question>
      <Question text={'Похож ли этот шум на звон, свист, треск?'} questionNum={num++}>
        <ListAnswer
          labels={['Похож на звон', 'Похож на свист', 'Похож на треск']}
          nothing="Нет шума"
          {...register('q13')}
        />
      </Question>
      <input type="submit" />
    </form>
  )
}
