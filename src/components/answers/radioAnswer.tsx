import { EntryData, defaultValues } from '@/views/formData'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RadioGroup } from '@headlessui/react'
import { isEqual } from 'lodash'
import { UseControllerProps, useController } from 'react-hook-form'
import styles from 'styles/form.module.scss'

interface RadioAnswerProps extends UseControllerProps<EntryData> {
  labels: string[]
}

function createArray(length: number, index: number): boolean[] {
  let arr = new Array(length).fill(false)
  arr[index] = true
  return arr
}

function compareArrays(a: boolean[], b: boolean[]) {
  return isEqual(a, b)
}

export function RadioAnswer({ labels, control, name }: RadioAnswerProps) {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      validate: (value) => !isEqual(value, defaultValues[name]) || 'Ответьте на вопрос',
    },
  })
  const booleanValue = value as boolean[]
  return (
    <RadioGroup
      value={booleanValue}
      onChange={onChange}
      as={'div'}
      className={styles['form-container']}
      by={compareArrays}
    >
      {labels.map((value, index) => {
        return (
          <RadioGroup.Option
            key={`radio-${name}-${index}`}
            id={`radio-${name}-${index}`}
            value={createArray(labels.length, index)}
            as={'span'}
          >
            {({ checked }) => (
              <>
                {checked ? (
                  <FontAwesomeIcon className="checked" icon={faCircleDot} />
                ) : (
                  <FontAwesomeIcon icon={faCircle} />
                )}
                <RadioGroup.Label
                  className={checked ? 'checked' : ''}
                  id={`radio-${name}-${index}`}
                >
                  {value}
                </RadioGroup.Label>
              </>
            )}
          </RadioGroup.Option>
        )
      })}
      {error && <p className={styles.error}>{error.message}</p>}
    </RadioGroup>
  )
}
