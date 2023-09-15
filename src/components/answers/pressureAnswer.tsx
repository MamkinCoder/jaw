import { useContext } from 'react'
import styles from 'styles/answer.module.css'
import { QuestionNumContext } from '../question'

interface PressureAnswerProps {}

export function PressureAnswer({}: PressureAnswerProps) {
  let questionNum = useContext(QuestionNumContext)

  return (
    <div>
      <textarea
        className={styles['form-input']}
        id={`input-${questionNum}-1`}
        placeholder="110"
        rows={1}
      />
      \
      <textarea
        className={styles['form-input']}
        id={`input-${questionNum}-2`}
        placeholder="70"
        rows={1}
      />
    </div>
  )
}
