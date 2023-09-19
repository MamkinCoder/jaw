import { ReactNode, createContext, forwardRef } from 'react'

interface QuestionProps {
  text: string
  questionNum: number
  children: ReactNode
}
export const QuestionNameContext = createContext<string>('')

export const Question = forwardRef<HTMLLabelElement, QuestionProps>(
  ({ text, questionNum, children }, ref) => {
    const qName = 'q' + questionNum

    return (
      <QuestionNameContext.Provider value={qName}>
        <>
          <div className="divider"></div>
          <label ref={ref} htmlFor={`input-${questionNum}-1`}>{`${questionNum}: ${text}`}</label>
          {children}
        </>
      </QuestionNameContext.Provider>
    )
  },
)

Question.displayName = 'Question'
