import styles from '../../styles/layout.module.css'
import { Answer } from './AnswerComponent'
import { QuestionText } from './QuestionTextComponent'

interface QuestionComponentProps {
  text: string
  answers: string[]
}

export function Question({ text, answers }: QuestionComponentProps) {
  return (
    <>
      <div className={styles.divider}></div>
      <QuestionText text={`${0}: ${text}`} />
      <Answer answers={answers} />
    </>
  )
}
