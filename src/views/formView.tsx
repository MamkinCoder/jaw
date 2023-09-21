import { GenderAnswer } from '@/components/answers/genderAnswer'
import { ListAnswer } from '@/components/answers/listAnswer'
import { PressureAnswer } from '@/components/answers/pressureAnswer'
import { RadioAnswer } from '@/components/answers/radioAnswer'
import { Question } from '@/components/question'
import { useFormKeysRefs } from '@/hooks/useFormKeysRefs'
import { Feedback, postEntry } from '@/utils/postEntry'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Disclosure } from '@headlessui/react'
import classNames from 'classnames'
import { SnackbarProvider, enqueueSnackbar } from 'notistack'
import { Fragment, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from 'styles/form.module.scss'
import { defaultValues, entryData } from './formData'

interface FormViewProps {}

export function FormView({}: FormViewProps) {
  const containerClasses = classNames(styles['grid-header'], styles.centered)
  const refs = useFormKeysRefs(Object.keys(defaultValues))
  const [feedback, setFeedback] = useState<Feedback | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    formState,
    reset,
  } = useForm<entryData>({ defaultValues })

  const onSubmit: SubmitHandler<entryData> = (entry) => {
    postEntry(entry)
      .then((response) => {
        enqueueSnackbar(response.message, {
          variant: response.status,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
        })
      })
      .catch((error) =>
        enqueueSnackbar(error.message, {
          variant: 'error',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
        }),
      )
  }

  useEffect(() => {
    Object.keys(defaultValues).forEach((key: keyof entryData) => {
      if (errors[key]) {
        refs[key].current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        })
      }
    })
  }, [errors, refs])

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
    if (formState.isSubmitting && formState.isValid) {
      enqueueSnackbar('Анкета отправляется', {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      })
    }
  }, [formState.isSubmitSuccessful, formState.isSubmitting, formState.isValid, reset])

  return (
    <Disclosure defaultOpen={false}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles['grid-container']}>
        <SnackbarProvider />
        <Disclosure.Button as={Fragment}>
          <FontAwesomeIcon icon={faCaretDown} />
        </Disclosure.Button>
        <h1 className={containerClasses}>Анкета для выявления патологий ВНЧС</h1>
        <Disclosure.Panel>
          <>
            <label>
              Ваш возраст
              <div>
                <input
                  className={styles['form-input']}
                  placeholder="25"
                  maxLength={3}
                  type="number"
                  {...register('age', {
                    required: 'Укажите Ваш возраст',
                    valueAsNumber: true,
                    min: { value: 0, message: 'Сколько-сколько вам лет?' },
                    max: { value: 100, message: 'Не врите' },
                  })}
                />
                {errors.age && <p>{errors.age.message}</p>}
              </div>
            </label>

            <label ref={refs.gender}>
              Ваш пол
              <GenderAnswer name="gender" control={control} />
            </label>

            <Question ref={refs.q1} text={'Беспокоят ли Вас'} questionNum={1}>
              {(name) => (
                <ListAnswer
                  name={name}
                  control={control}
                  labels={['Головные боли', 'Боли в шее', 'Дискомфорт/боли в плечах и лопатках']}
                  nothing={'Ничего из вышеперечисленного'}
                />
              )}
            </Question>
            <Question
              ref={refs.q2}
              text={'Какое давление вы считаете для себя нормой'}
              questionNum={2}
            >
              {(name) => <PressureAnswer control={control} name={name} />}
            </Question>
            <Question ref={refs.q3} text={'Беспокоят ли Вас боли в челюстях?'} questionNum={3}>
              {(name) => (
                <ListAnswer
                  name={name}
                  control={control}
                  labels={['В покое', 'Во время приема пищи', 'После приема пищи']}
                  nothing={'Не беспокоит'}
                />
              )}
            </Question>
            <Question
              ref={refs.q4}
              text={'Ощущаете ли Вы щёлкание, трение, боль при жевании в ВНЧС?'}
              questionNum={4}
            >
              {(name) => (
                <ListAnswer
                  name={name}
                  control={control}
                  labels={['Да, ощущаю щёлкание', 'Да, ощущаю трение', 'Да, ощущаю боль']}
                  nothing={'Нет, не ощущаю'}
                />
              )}
            </Question>
            <Question
              ref={refs.q5}
              text={'Испытываете ли Вы напряженность, затруднение при открывании рта?'}
              questionNum={5}
            >
              {(name) => (
                <RadioAnswer
                  name={name}
                  control={control}
                  labels={['Да, часто', 'Да, редко', 'Нет']}
                />
              )}
            </Question>
            <Question
              ref={refs.q6}
              text={
                'Бывает ли у Вас стискивание и скрип зубами в ночное время или в моменты повышенной концентрации/стресса?'
              }
              questionNum={6}
            >
              {(name) => (
                <RadioAnswer
                  labels={['Да, часто', 'Да, редко', 'Нет']}
                  name={name}
                  control={control}
                />
              )}
            </Question>
            <Question
              ref={refs.q7}
              text={
                'Возникают ли у Вас болевые ощущения при смещении нижней челюсти вперед, в стороны?'
              }
              questionNum={7}
            >
              {(name) => (
                <RadioAnswer
                  labels={['Да, часто', 'Да, редко', 'Нет']}
                  name={name}
                  control={control}
                />
              )}
            </Question>
            <Question
              ref={refs.q8}
              text={'Имеют ли ваши зубы повышенную чувствительность?'}
              questionNum={8}
            >
              {(name) => (
                <RadioAnswer
                  labels={['Да, имеют', 'Нет, не имеют']}
                  name={name}
                  control={control}
                />
              )}
            </Question>
            <Question
              ref={refs.q9}
              text={'Бывает ли у вас тревожность, раздражительность, нарушение сна?'}
              questionNum={9}
            >
              {(name) => (
                <ListAnswer
                  labels={[
                    'Да, бывает тревожность',
                    'Да, бывает раздражительность',
                    'Да, бывает нарушение сна',
                  ]}
                  nothing={'Нет, не бывает'}
                  control={control}
                  name={name}
                />
              )}
            </Question>
            <Question
              ref={refs.q10}
              text={
                'Посещали ли Вы невролога, психолога, психиатра, по поводу неясных болей в области головы, лица, шеи.'
              }
              questionNum={10}
            >
              {(name) => (
                <ListAnswer
                  labels={[
                    'Да, посещал(а) невролога ',
                    'Да, посещал(а) психолога',
                    'Да, посещал(а) психиатра',
                  ]}
                  nothing={'Нет, не посещал(а)'}
                  control={control}
                  name={name}
                />
              )}
            </Question>
            <Question
              ref={refs.q11}
              text={
                'Имеются ли у Вас заболевания ЛОР органов? (Ухо, горло, нос). Если да, укажите какие.'
              }
              questionNum={11}
            >
              {(name) => (
                <input
                  className={styles['form-input']}
                  id="input-11-1"
                  placeholder={'синусит, гайморит'}
                  {...register(name)}
                />
              )}
            </Question>
            <Question
              ref={refs.q12}
              text={
                'Случается ли у Вас головокружение, чувство заложенности в ушах, звон в одном или обоих ушах?'
              }
              questionNum={12}
            >
              {(name) => (
                <ListAnswer
                  labels={[
                    'Да, кружится голова',
                    'Да, закладывает уши',
                    'Да, слышу звон в одном (или обоих) ушах',
                  ]}
                  nothing={'Нет, не случается'}
                  name={name}
                  control={control}
                />
              )}
            </Question>
            <Question
              ref={refs.q13}
              text={'Похож ли этот шум на звон, свист, треск?'}
              questionNum={13}
            >
              {(name) => (
                <ListAnswer
                  labels={['Похож на звон', 'Похож на свист', 'Похож на треск']}
                  nothing="Нет шума"
                  name={name}
                  control={control}
                />
              )}
            </Question>
            <input type="submit" />
          </>
        </Disclosure.Panel>
        <div className={styles['organic-paper']}></div>
        <div className={styles['paper-shadow']}></div>
        <div className={styles['paper-highlight']}></div>
        <div className={styles['plastic-bag']}></div>
      </form>
    </Disclosure>
  )
}
