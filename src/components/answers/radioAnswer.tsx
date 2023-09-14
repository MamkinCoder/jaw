import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RadioGroup } from '@headlessui/react'
import { useContext, useState } from 'react'
import styles from 'styles/answer.module.css'
import { QuestionNumContext } from '../question'
import { CommonAnswersProps } from './commonAnswersProps'

interface RadioAnswerProps extends CommonAnswersProps {}

export function RadioAnswer({ labels }: RadioAnswerProps) {
  const [selectedOption, setSelectedOption] = useState(null)

  let questionNum = useContext(QuestionNumContext)

  questionNum = questionNum === undefined ? 0 : questionNum

  return (
    <RadioGroup
      value={selectedOption}
      onChange={setSelectedOption}
      as={'div'}
      className={styles['form-container']}
    >
      <div>
        {labels.map((value, index) => (
          <RadioGroup.Option
            key={`radio-${questionNum}-${index}`}
            id={`radio-${questionNum}-${index}`}
            value={index}
          >
            {({ checked }) => (
              <div className={`flex items-center ${checked ? 'text-blue-500' : ''}`}>
                {checked ? (
                  <FontAwesomeIcon icon={faCircleDot} />
                ) : (
                  <FontAwesomeIcon icon={faCircle} />
                )}
                <RadioGroup.Label id={`radio-${questionNum}-${index}`}>{value}</RadioGroup.Label>
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
