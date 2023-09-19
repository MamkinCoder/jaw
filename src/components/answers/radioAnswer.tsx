import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RadioGroup } from '@headlessui/react'
import { isEqual } from 'lodash'
import { useContext } from 'react'
import styles from 'styles/answer.module.css'
import { QuestionNameContext } from '../question'

interface RadioAnswerProps {
  labels: string[]
  onChange: (value: boolean[]) => void
  values: boolean[]
}

function createArray(length: number, index: number): boolean[] {
  let arr = new Array(length).fill(false)
  arr[index] = true
  return arr
}

function compareArrays(a: boolean[], b: boolean[]) {
  return isEqual(a, b)
}

export function RadioAnswer({ labels, onChange, values }: RadioAnswerProps) {
  let questionName = useContext(QuestionNameContext)

  // questionNum = questionNum === undefined ? 0 : questionNum

  return (
    <RadioGroup
      value={values}
      onChange={onChange}
      as={'div'}
      className={styles['form-container']}
      by={compareArrays}
    >
      <div>
        {labels.map((value, index) => {
          return (
            <RadioGroup.Option
              key={`radio-${questionName}-${index}`}
              id={`radio-${questionName}-${index}`}
              value={createArray(labels.length, index)}
            >
              {({ checked }) => (
                <div className={`flex items-center ${checked ? 'text-blue-500' : ''}`}>
                  {checked ? (
                    <FontAwesomeIcon icon={faCircleDot} />
                  ) : (
                    <FontAwesomeIcon icon={faCircle} />
                  )}
                  <RadioGroup.Label id={`radio-${questionName}-${index}`}>{value}</RadioGroup.Label>
                </div>
              )}
            </RadioGroup.Option>
          )
        })}
      </div>
    </RadioGroup>
  )
}
