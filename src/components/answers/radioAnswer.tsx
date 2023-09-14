import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RadioGroup } from '@headlessui/react'
import { useState } from 'react'

import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { CommonAnswersProps } from './commonAnswersProps'

interface RadioAnswerProps extends CommonAnswersProps {}

export function RadioAnswer({ labels, questionNum }: RadioAnswerProps) {
  const [selectedOption, setSelectedOption] = useState(null)

  return (
    <RadioGroup value={selectedOption} onChange={setSelectedOption}>
      <div>
        {labels.map((value, index) => (
          <RadioGroup.Option
            key={`radio-${questionNum}-${index}`}
            id={`radio-${questionNum}-${index}`}
            value={index}
          >
            {({ checked }) => (
              <div
                className={`flex items-center ${
                  checked ? 'text-blue-500' : ''
                }`}
              >
                {checked ? (
                  <FontAwesomeIcon icon={faCircleDot} />
                ) : (
                  <FontAwesomeIcon icon={faCircle} />
                )}
                <RadioGroup.Label id={`radio-${questionNum}-${index}`}>
                  {value}
                </RadioGroup.Label>
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
