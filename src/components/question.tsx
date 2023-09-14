import { ReactNode, createContext } from 'react'
import styles from 'styles/layout.module.css'

interface QuestionProps {
  text: string
  questionNum: number
  children?: ReactNode
}
export const QuestionNumContext = createContext<number | undefined>(undefined)

export function Question({ text, questionNum, children }: QuestionProps) {
  return (
    <QuestionNumContext.Provider value={questionNum}>
      <>
        <div className={styles.divider}></div>
        <div>
          <label htmlFor={''}>{`${questionNum}: ${text}`}</label>
        </div>
        {children}
      </>
    </QuestionNumContext.Provider>
  )
}
