import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircleCheck, faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Switch } from '@headlessui/react'
import { Fragment, useCallback, useContext, useState } from 'react'
import styles from 'styles/answer.module.css'
import { QuestionNumContext } from '../question'

interface ListAnswerProps {
  nothing: string
  labels: string[]
  onChange: (value: boolean[]) => void
  onBlur: () => void
  value: boolean[]
}

export function ListAnswer({ labels, nothing, onChange }: ListAnswerProps) {
  const initialOptions = new Array(labels.length).fill(false)

  const [selectedOptions, setSelectedOptions] = useState<boolean[]>(initialOptions)
  const [nothingState, setNothingState] = useState(false)

  let questionNum = useContext(QuestionNumContext)

  questionNum = questionNum === undefined ? 0 : questionNum

  const handleChange = useCallback(
    (index: number, value: boolean) => {
      setNothingState(false)
      const change = [...selectedOptions]
      change[index] = value
      setSelectedOptions(change)
      console.log(change)
      onChange(change)
    },
    [onChange, selectedOptions],
  )
  const handleNothing = useCallback(
    (value: boolean) => {
      if (value) {
        setSelectedOptions(initialOptions)
      }
      setNothingState(value)
      onChange(initialOptions)
    },
    [onChange, initialOptions],
  )

  return (
    <div className={styles['form-container']}>
      {labels.map((value, index) => (
        <Switch
          checked={selectedOptions[index]}
          onChange={(value) => handleChange(index, value)}
          key={`list-${questionNum}-${index}`}
          as={Fragment}
        >
          {({ checked }) => (
            <span>
              {checked ? (
                <FontAwesomeIcon icon={faCircleCheck} />
              ) : (
                <FontAwesomeIcon icon={faCircle} />
              )}
              <label>{value}</label>
            </span>
          )}
        </Switch>
      ))}
      <Switch checked={nothingState} onChange={handleNothing} as={Fragment}>
        {({ checked }) => (
          <span>
            {checked ? <FontAwesomeIcon icon={faCircleDot} /> : <FontAwesomeIcon icon={faCircle} />}
            <label>{nothing}</label>
          </span>
        )}
      </Switch>
    </div>
  )
}
