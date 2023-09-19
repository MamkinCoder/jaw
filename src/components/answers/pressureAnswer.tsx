import { debounce } from 'lodash'
import { ChangeEvent, useContext } from 'react'
import styles from 'styles/answer.module.css'
import { QuestionNameContext } from '../question'

interface PressureAnswerProps {
  onChange: (value: string) => void
  value: string
}

export function PressureAnswer({ onChange, value }: PressureAnswerProps) {
  let questionName = useContext(QuestionNameContext)

  const debouncedCLOG = debounce((e) => console.log(e), 300)

  function handleLeft(event: ChangeEvent<HTMLInputElement>) {
    let newStr = event.target.value
    let result = value.replace(/.*\\/, newStr + '\\')
    onChange(result)
  }

  function handleRight(event: ChangeEvent<HTMLInputElement>) {
    let newStr = event.target.value
    let result = value.replace(/\\.*/, '\\' + newStr)
    onChange(result)
  }

  return (
    <div>
      <input
        className={styles['form-input']}
        id={`input-${questionName}-1`}
        placeholder="110"
        onChange={handleLeft}
        maxLength={3}
      />
      \
      <input
        className={styles['form-input']}
        id={`input-${questionName}-2`}
        placeholder="70"
        onChange={handleRight}
        maxLength={3}
      />
    </div>
  )
}
