import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircleCheck, faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Switch } from '@headlessui/react'
import { Fragment, useCallback, useState } from 'react'
import { CommonAnswersProps } from './commonAnswersProps'

interface ListAnswerProps extends CommonAnswersProps {
  nothing: string
}

export function ListAnswer({ labels, nothing, questionNum }: ListAnswerProps) {
  const initialOptions = new Array(labels.length).fill(false)

  const [selectedOptions, setSelectedOptions] =
    useState<boolean[]>(initialOptions)
  const [nothingState, setNothingState] = useState(false)

  const handleChange = useCallback(
    (index: number, value: boolean) => {
      setNothingState(false)
      const change = [...selectedOptions]
      change[index] = value
      setSelectedOptions(change)
      console.log(change)
    },
    [selectedOptions],
  )
  const handleNothing = useCallback(
    (value: boolean) => {
      if (value) {
        setSelectedOptions(initialOptions)
      }
      setNothingState(value)
    },
    [initialOptions],
  )

  return (
    <>
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
            {checked ? (
              <FontAwesomeIcon icon={faCircleDot} />
            ) : (
              <FontAwesomeIcon icon={faCircle} />
            )}
            <label>{nothing}</label>
          </span>
        )}
      </Switch>
    </>
  )
}
