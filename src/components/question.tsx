import { ReactNode } from 'react'
import styles from 'styles/layout.module.css'
import { Answer, AnswerProps } from './answer'

interface QuestionProps extends AnswerProps {
  text: string
  questionNum: number
  nothing?: string
  children?: ReactNode
}

export function Question({
  text,
  answerLabels: answers,
  questionNum: num,
  type,
  nothing = '',
  children,
}: QuestionProps) {
  return (
    <>
      <div className={styles.divider}></div>
      <div>
        <label htmlFor={''}>{`${num}: ${text}`}</label>
      </div>
      <Answer
        answerLabels={answers}
        type={type}
        nothing={nothing}
        questionNum={num}
      />
      {children}
    </>
  )
}
