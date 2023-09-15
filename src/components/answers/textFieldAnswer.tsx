import { ChangeEvent, useContext, useRef, useState } from 'react'
import styles from 'styles/answer.module.css'
import { QuestionNumContext } from '../question'

interface TextFieldAnswerProps {
  label: string
}

export function TextFieldAnswer({ label }: TextFieldAnswerProps) {
  const [inputValues, setInputValues] = useState<string[]>()
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  let questionNum = useContext(QuestionNumContext)

  questionNum = questionNum === undefined ? 0 : questionNum

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    //   const newValue = event.target.value;
    //   setInputValues((prevValues) => {
    //     const updatedValues = [...prevValues];
    //     updatedValues[index] = newValue;
    //     return updatedValues;
    //   });

    if (textAreaRef.current) {
      const textArea = textAreaRef.current
      if (textArea) {
        const textArea = event.target
        textArea.rows = 1
        const lines = textArea.value.split('\n').length
        textArea.rows = lines
      }
    }
  }
  return (
    <div className={styles['form-container']}>
      <textarea
        rows={1}
        ref={textAreaRef}
        className={styles['form-input']}
        id={`input-${questionNum}-1`}
        onChange={handleChange}
        placeholder={label}
      />
    </div>
  )
}
