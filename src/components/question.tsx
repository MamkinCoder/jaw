import { EntryData } from '@/views/formData'
import { forwardRef } from 'react'
import { FieldPath } from 'react-hook-form'

interface QuestionProps {
  text: string
  questionNum: number
  children: (name: FieldPath<EntryData>) => React.ReactElement
}

export const Question = forwardRef<HTMLLabelElement, QuestionProps>(
  ({ text, questionNum, children }, ref) => {
    const qName = 'q' + questionNum

    return (
      <>
        <div className="divider"></div>
        <label ref={ref} htmlFor={`input-${questionNum}-1`}>{`${questionNum}: ${text}`}</label>
        {children(qName)}
      </>
    )
  },
)

Question.displayName = 'Question'
