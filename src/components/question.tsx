import { ReactNode, createContext } from 'react'

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
        <div className="divider"></div>
        <label htmlFor={`input-${questionNum}-1`}>{`${questionNum}: ${text}`}</label>
        {children}
      </>
    </QuestionNumContext.Provider>
  )
}
