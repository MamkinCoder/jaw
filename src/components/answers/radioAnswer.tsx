import { entryData } from '@/views/formData'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RadioGroup } from '@headlessui/react'
import { isEqual } from 'lodash'
import { UseControllerProps, useController } from 'react-hook-form'
import styles from 'styles/answer.module.scss'

interface RadioAnswerProps extends UseControllerProps<entryData> {
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
    // rules: {
    //   validate: (value) => !isEqual(value, defaultValues[name]) || 'Ответьте на вопрос',
    // },
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
      <div>
        {labels.map((value, index) => {
          return (
            <RadioGroup.Option
              key={`radio-${name}-${index}`}
              id={`radio-${name}-${index}`}
              value={createArray(labels.length, index)}
            >
              {({ checked }) => (
                <div className={`flex items-center ${checked ? 'text-blue-500' : ''}`}>
                  {checked ? (
                    <FontAwesomeIcon icon={faCircleDot} />
                  ) : (
                    <FontAwesomeIcon icon={faCircle} />
                  )}
                  <RadioGroup.Label id={`radio-${name}-${index}`}>{value}</RadioGroup.Label>
                </div>
              )}
            </RadioGroup.Option>
          )
        })}
      </div>
      {error && <p>{error.message}</p>}
    </RadioGroup>
  )
}
