import { ReactNode, createContext, forwardRef } from 'react'

interface QuestionProps {
  text: string
  questionNum: number
  children?: ReactNode
}
export const QuestionNumContext = createContext<number | undefined>(undefined)

export const Question = forwardRef<HTMLLabelElement, QuestionProps>(
  ({ text, questionNum, children }, ref) => {
    const qName = 'q' + questionNum

    return (
      <QuestionNumContext.Provider value={questionNum}>
        <>
          <div className="divider"></div>
          <label ref={ref} htmlFor={`input-${questionNum}-1`}>{`${questionNum}: ${text}`}</label>
          {children}
        </>
      </QuestionNumContext.Provider>
    )
  },
)

Question.displayName = 'Question'
