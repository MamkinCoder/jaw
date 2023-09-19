import { defaultValues, entryData } from '@/views/formData'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircleCheck, faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Switch } from '@headlessui/react'
import { isEqual } from 'lodash'
import { Fragment, useCallback, useContext, useState } from 'react'
import { Control, Controller, useController } from 'react-hook-form'
import styles from 'styles/answer.module.css'
import { QuestionNameContext } from '../question'

interface ListAnswerProps {
  nothing: string
  labels: string[]
  control: Control<entryData, any>
}

export function ListAnswer({ labels, nothing, control }: ListAnswerProps) {
  const initialOptions = new Array(labels.length).fill(false)
  const [nothingState, setNothingState] = useState<boolean>(false)
  const questionName = useContext(QuestionNameContext)
  const controller = useController({ name: questionName, control })

  const handleChange = useCallback(
    (index: number, newValue: boolean, onChange: (...event: any[]) => void, value: boolean[]) => {
      setNothingState(false)
      const change = [...value]
      change[index] = newValue
      onChange(change)
    },
    [],
  )
  const handleNothing = useCallback(
    (value: boolean, onChange: (...event: any[]) => void) => {
      onChange()
      if (value) {
        setNothingState(value)
      }
      onChange(initialOptions)
    },
    [initialOptions],
  )

  return (
    <Controller
      control={control}
      name={questionName}
      rules={{
        validate: (value) => {
          return !isEqual(value, defaultValues[questionName]) || 'Ответьте на вопрос'
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error, isTouched } }) => {
        const booleanValue = value as boolean[]
        return (
          <div className={styles['form-container']}>
            {labels.map((label, index) => (
              <Switch
                checked={booleanValue?.[index] || false}
                onChange={(newValue) => handleChange(index, newValue, onChange, booleanValue)}
                key={`list-${questionName}-${index}`}
                as={Fragment}
              >
                {({ checked }) => (
                  <span>
                    {checked ? (
                      <FontAwesomeIcon icon={faCircleCheck} />
                    ) : (
                      <FontAwesomeIcon icon={faCircle} />
                    )}
                    <label>{label}</label>
                  </span>
                )}
              </Switch>
            ))}
            <Switch
              checked={nothingState === null ? false : nothingState}
              onChange={(value) => handleNothing(value, onChange)}
              as={Fragment}
            >
              {({ checked }) => (
                <span>
                  {checked ? (
                    <FontAwesomeIcon icon={faCircleDot} />
                  ) : (
                    <FontAwesomeIcon icon={faCircle} />
                  )}
                  <label>{nothing}</label>
                </span>
              )}
            </Switch>
            {error && <p>{error.message}</p>}
          </div>
        )
      }}
    />
  )
}
