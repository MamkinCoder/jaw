import { ListAnswer } from '@/components/answers/listAnswer'
import { PressureAnswer } from '@/components/answers/pressureAnswer'
import { RadioAnswer } from '@/components/answers/radioAnswer'
import { Question } from '@/components/question'
import { useFormKeysRefs } from '@/hooks/useFormKeysRefs'
import classNames from 'classnames'
import { isEqual } from 'lodash'
import { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styles from 'styles/layout.module.css'
import { defaultValues, entryData } from './formData'

interface FormViewProps {}

export function FormView({}: FormViewProps) {
  const containerClasses = classNames(styles['grid-header'], styles.centered)
  let num = 1
  const refs = useFormKeysRefs(Object.keys(defaultValues))

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<entryData>({ defaultValues })

  const onSubmit: SubmitHandler<entryData> = (data) => console.log(data)

  useEffect(() => {
    Object.keys(defaultValues).forEach((key: string) => {
      const entryDataKey = key as keyof entryData
      if (errors[entryDataKey]) {
        refs[key].current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        })
      }
    })
  }, [errors, refs])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['grid-container']}>
      <h1 className={containerClasses}>Анкета для выявления патологий ВНЧС</h1>
      {/* <label>
        Ваш возраст
        <div>
          <input
            className={styles['form-input']}
            placeholder="25"
            maxLength={3}
            {...(register('age'), { required: true })}
          />
        </div>
      </label> */}
      <Controller
        control={control}
        name="gender"
        rules={{
          validate: (value) => !isEqual(value, defaultValues.gender) || 'Укажите пол',
        }}
        render={({ field: { onChange, value } }) => (
          <label ref={refs.gender}>
            Ваш пол
            <RadioAnswer onChange={onChange} values={value} labels={['Мужчина', 'Женщина']} />
            {errors.gender && <p>{errors.gender.message}</p>}
          </label>
        )}
      />
      {num++ && false}
      {/* <Question ref={refs['q' + num]} text={'Беспокоят ли Вас'} questionNum={num}>
        <Controller
          control={control}
          name={'q' + num}
          rules={{
            validate: (value) => !isEqual(value, defaultValues['q' + num]) || 'Ответьте на вопрос',
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <ListAnswer
                onChange={onChange}
                values={value as boolean[]}
                labels={['Головные боли', 'Боли в шее', 'Дискомфорт/боли в плечах и лопатках']}
                nothing={'Ничего из вышеперечисленного'}
              />
              {errors['q' + num]?.message && <p>{errors['q' + num].message}</p>}
            </>
          )}
        />
      </Question> */}
      <Question
        ref={refs.q2}
        text={'Какое давление вы считаете для себя нормой'}
        questionNum={num++}
      >
        <Controller
          control={control}
          name="q2"
          rules={{
            validate: (value) => !isEqual(value, defaultValues.q2) || 'Укажите давление',
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <PressureAnswer onChange={onChange} value={value} />
              {errors.q2 && <p>{errors.q2.message}</p>}
            </>
          )}
        />
      </Question>
      <Question ref={refs.q3} text={'Беспокоят ли Вас боли в челюстях?'} questionNum={num++}>
        <Controller
          control={control}
          name="q3"
          rules={{
            validate: (value) => !isEqual(value, defaultValues.q3) || 'Ответьте на вопрос',
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <ListAnswer
                onChange={onChange}
                values={value}
                labels={['В покое', 'Во время приема пищи', 'После приема пищи']}
                nothing={'Не беспокоит'}
              />
              {errors.q3 && <p>{errors.q3.message}</p>}
            </>
          )}
        />
      </Question>
      <Question
        ref={refs.q4}
        text={'Ощущаете ли Вы щёлкание, трение, боль при жевании в ВНЧС?'}
        questionNum={num++}
      >
        <Controller
          control={control}
          name="q4"
          rules={{
            validate: (value) => !isEqual(value, defaultValues.q4) || 'Ответьте на вопрос',
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <ListAnswer
                onChange={onChange}
                values={value}
                labels={['Да, ощущаю щёлкание', 'Да, ощущаю трение', 'Да, ощущаю боль']}
                nothing={'Нет, не ощущаю'}
              />
              {errors.q4 && <p>{errors.q4.message}</p>}
            </>
          )}
        />
      </Question>
      <Question
        ref={refs.q5}
        text={'Испытываете ли Вы напряженность, затруднение при открывании рта?'}
        questionNum={num++}
      >
        <Controller
          control={control}
          name="q5"
          rules={{
            validate: (value) => !isEqual(value, defaultValues.q5) || 'Ответьте на вопрос',
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <RadioAnswer
                onChange={onChange}
                values={value}
                labels={['Да, часто', 'Да, редко', 'Нет']}
              />
              {errors.q5 && <p>{errors.q5.message}</p>}
            </>
          )}
        />
      </Question>
      <Question
        ref={refs.q6}
        text={
          'Бывает ли у Вас стискивание и скрип зубами в ночное время или в моменты повышенной концентрации/стресса?'
        }
        questionNum={num++}
      >
        <Controller
          control={control}
          name="q6"
          rules={{
            validate: (value) => !isEqual(value, defaultValues.q6) || 'Ответьте на вопрос',
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <RadioAnswer
                labels={['Да, часто', 'Да, редко', 'Нет']}
                onChange={onChange}
                values={value}
              />
              {errors.q6 && <p>{errors.q6.message}</p>}
            </>
          )}
        />
      </Question>
      <Question
        ref={refs.q7}
        text={'Возникают ли у Вас болевые ощущения при смещении нижней челюсти вперед, в стороны?'}
        questionNum={num++}
      >
        <Controller
          control={control}
          name="q7"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <RadioAnswer
              labels={['Да, часто', 'Да, редко', 'Нет']}
              onChange={onChange}
              values={value}
            />
          )}
        />
      </Question>
      <Question
        ref={refs.q8}
        text={'Имеют ли ваши зубы повышенную чувствительность?'}
        questionNum={num++}
      >
        <Controller
          control={control}
          name="q8"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <RadioAnswer
              labels={['Да, имеют', 'Нет, не имеют']}
              onChange={onChange}
              values={value}
            />
          )}
        />
      </Question>
      <Question
        ref={refs.q9}
        text={'Бывает ли у вас тревожность, раздражительность, нарушение сна?'}
        questionNum={num++}
      >
        <Controller
          control={control}
          name="q9"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <ListAnswer
              labels={[
                'Да, бывает тревожность',
                'Да, бывает раздражительность',
                'Да, бывает нарушение сна',
              ]}
              nothing={'Нет, не бывает'}
              onChange={onChange}
              values={value}
            />
          )}
        />
      </Question>
      <Question
        ref={refs.q10}
        text={
          'Посещали ли Вы невролога, психолога, психиатра, по поводу неясных болей в области головы, лица, шеи.'
        }
        questionNum={num++}
      >
        <Controller
          control={control}
          name="q10"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <ListAnswer
              labels={[
                'Да, посещал(а) невролога ',
                'Да, посещал(а) психолога',
                'Да, посещал(а) психиатра',
              ]}
              nothing={'Нет, не посещал(а)'}
              onChange={onChange}
              values={value}
            />
          )}
        />
      </Question>
      <Question
        ref={refs.q11}
        text={
          'Имеются ли у Вас заболевания ЛОР органов? (Ухо, горло, нос). Если да, укажите какие.'
        }
        questionNum={num++}
      >
        <input
          className={styles['form-input']}
          id="input-11-1"
          placeholder={'синусит, гайморит'}
          {...register('q11')}
        />
      </Question>
      <Question
        ref={refs.q12}
        text={
          'Случается ли у Вас головокружение, чувство заложенности в ушах, звон в одном или обоих ушах?'
        }
        questionNum={num++}
      >
        <Controller
          control={control}
          name="q12"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <ListAnswer
              labels={[
                'Да, кружится голова',
                'Да, закладывает уши',
                'Да, слышу звон в одном (или обоих) ушах',
              ]}
              nothing={'Нет, не случается'}
              onChange={onChange}
              values={value}
            />
          )}
        />
      </Question>
      <Question
        ref={refs.q13}
        text={'Похож ли этот шум на звон, свист, треск?'}
        questionNum={num++}
      >
        <Controller
          control={control}
          name="q13"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <ListAnswer
              labels={['Похож на звон', 'Похож на свист', 'Похож на треск']}
              nothing="Нет шума"
              onChange={onChange}
              values={value}
            />
          )}
        />
      </Question>
      <input type="submit" />
    </form>
  )
}
