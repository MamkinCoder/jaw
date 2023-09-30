import { GenderAnswer } from '@/components/answers/genderAnswer'
import { ListAnswer } from '@/components/answers/listAnswer'
import { PressureAnswer } from '@/components/answers/pressureAnswer'
import { RadioAnswer } from '@/components/answers/radioAnswer'
import { Question } from '@/components/question'
import { useFormKeysRefs } from '@/hooks/useFormKeysRefs'
import { labels, questions } from '@/strings/labels'
import { postEntry } from '@/utils/postEntry'
import classNames from 'classnames'
import { useSnackbar } from 'notistack'
import { CSSProperties, Dispatch, ReactElement, SetStateAction, useEffect } from 'react'
import { SubmitHandler, UseFormReturn, useForm } from 'react-hook-form'
import styles from 'styles/form.module.scss'
import { EntryData, defaultValues } from './formData'

interface FormViewProps {
  children: ReactElement
  form?: UseFormReturn<EntryData, any, undefined>
  setModal?: Dispatch<SetStateAction<boolean>>
  style?: CSSProperties | undefined
  className?: string
}

export function FormView({ children, form, setModal, style, className }: FormViewProps) {
  const containerClasses = classNames(styles['grid-header'], styles.centered)
  const refs = useFormKeysRefs(Object.keys(defaultValues))
  const { enqueueSnackbar } = useSnackbar()

  const extraForm = useForm<EntryData>({ defaultValues })

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    formState,
    reset,
  } = form ?? extraForm

  const onSubmit: SubmitHandler<EntryData> = (entry) => {
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
    Object.keys(defaultValues).forEach((key: keyof EntryData) => {
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
      setModal && setModal(false)
    }
  }, [formState.isSubmitSuccessful, reset, setModal])

  useEffect(() => {
    if (formState.isSubmitting) {
      enqueueSnackbar('Анкета отправляется', {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      })
    }
  }, [enqueueSnackbar, formState.isSubmitting])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames(styles['grid-container'], className)}
    >
      <div className={containerClasses}>{children}</div>
      <label>
        {questions.age}
        <input
          className={styles['form-input-short']}
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
        {errors.age && <p className={styles.error}>{errors.age.message}</p>}
      </label>
      <label ref={refs.gender}>
        {questions.gender}
        <GenderAnswer name="gender" control={control} />
      </label>
      <Question ref={refs.q1} text={questions.q1} questionNum={1}>
        {(name) => (
          <ListAnswer
            name={name}
            control={control}
            labels={labels.q1}
            nothing={'Ничего из вышеперечисленного'}
          />
        )}
      </Question>
      <Question ref={refs.q2} text={questions.q2} questionNum={2}>
        {(name) => <PressureAnswer control={control} name={name} />}
      </Question>
      <Question ref={refs.q3} text={questions.q3} questionNum={3}>
        {(name) => (
          <ListAnswer name={name} control={control} labels={labels.q3} nothing={'Не беспокоит'} />
        )}
      </Question>
      <Question ref={refs.q4} text={questions.q4} questionNum={4}>
        {(name) => (
          <ListAnswer name={name} control={control} labels={labels.q4} nothing={'Нет, не ощущаю'} />
        )}
      </Question>
      <Question ref={refs.q5} text={questions.q5} questionNum={5}>
        {(name) => <RadioAnswer name={name} control={control} labels={labels.q5} />}
      </Question>
      <Question ref={refs.q6} text={questions.q6} questionNum={6}>
        {(name) => <RadioAnswer labels={labels.q6} name={name} control={control} />}
      </Question>
      <Question ref={refs.q7} text={questions.q7} questionNum={7}>
        {(name) => <RadioAnswer labels={labels.q7} name={name} control={control} />}
      </Question>
      <Question ref={refs.q8} text={questions.q8} questionNum={8}>
        {(name) => <RadioAnswer labels={labels.q8} name={name} control={control} />}
      </Question>
      <Question ref={refs.q9} text={questions.q9} questionNum={9}>
        {(name) => (
          <ListAnswer labels={labels.q9} nothing={'Нет, не бывает'} control={control} name={name} />
        )}
      </Question>
      <Question ref={refs.q10} text={questions.q10} questionNum={10}>
        {(name) => (
          <ListAnswer
            labels={labels.q10}
            nothing={'Нет, не посещал(а)'}
            control={control}
            name={name}
          />
        )}
      </Question>
      <Question ref={refs.q11} text={questions.q11} questionNum={11}>
        {(name) => (
          <input
            className={styles['form-input']}
            id="input-11-1"
            placeholder={'синусит, гайморит'}
            {...register(name)}
          />
        )}
      </Question>
      <Question ref={refs.q12} text={questions.q12} questionNum={12}>
        {(name) => (
          <ListAnswer
            labels={labels.q12}
            nothing={'Нет, не случается'}
            name={name}
            control={control}
          />
        )}
      </Question>
      <Question ref={refs.q13} text={questions.q13} questionNum={13}>
        {(name) => (
          <ListAnswer labels={labels.q13} nothing="Нет шума" name={name} control={control} />
        )}
      </Question>
      <input type="submit" value="Отправить" className={styles['form-input-submit']} />
    </form>
  )
}
