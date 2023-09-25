import { defaultValues, entryData } from '@/views/formData'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircleCheck, faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Switch } from '@headlessui/react'
import { isEqual } from 'lodash'
import { Fragment, useCallback, useState } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'
import styles from 'styles/answer.module.scss'

interface ListAnswerProps extends UseControllerProps<entryData> {
  nothing: string
  labels: string[]
}

export function ListAnswer({ labels, nothing, control, name }: ListAnswerProps) {
  const initialOptions = new Array(labels.length).fill(false)
  const [nothingState, setNothingState] = useState<boolean>(false)
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      // validate: (value) => {
      //   return !isEqual(value, defaultValues[name]) || 'Ответьте на вопрос'
      // },
    },
  })
  const booleanValue = value as boolean[]
  const handleChange = useCallback(
    (index: number, newValue: boolean) => {
      setNothingState(false)
      let change = [...booleanValue]
      for (let i = 0; i < change.length; i++) {
        change[i] = change[i] === null ? false : change[i]
      }
      change[index] = newValue
      if (isEqual(change, initialOptions)) {
        change = defaultValues[name] as boolean[]
      }
      onChange(change)
    },
    [booleanValue, initialOptions, name, onChange],
  )
  const handleNothing = useCallback(
    (value: boolean) => {
      if (value) {
        setNothingState(value)
      }
      onChange(initialOptions)
    },
    [initialOptions, onChange],
  )

  return (
    <div className={styles['form-container']}>
      {labels.map((label, index) => (
        <Switch
          checked={booleanValue?.[index] || false}
          onChange={(newValue) => handleChange(index, newValue)}
          key={`list-${name}-${index}`}
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
        onChange={(value) => handleNothing(value)}
        as={Fragment}
      >
        {({ checked }) => (
          <span>
            {checked ? <FontAwesomeIcon icon={faCircleDot} /> : <FontAwesomeIcon icon={faCircle} />}
            <label>{nothing}</label>
          </span>
        )}
      </Switch>
      {error && <p>{error.message}</p>}
    </div>
  )
}
