import { ChangeEvent, Fragment, useContext, useRef, useState } from 'react'
import styles from 'styles/answer.module.css'
import { QuestionNumContext } from '../question'
import { CommonAnswersProps } from './commonAnswersProps'

interface TextFieldAnswerProps extends CommonAnswersProps {}

export function TextFieldAnswer({ labels }: TextFieldAnswerProps) {
  const [inputValues, setInputValues] = useState<string[]>()
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  let questionNum = useContext(QuestionNumContext)

  questionNum = questionNum === undefined ? 0 : questionNum

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>, index: number) => {
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
      {labels.map((value, index) => (
        <Fragment key={`fragment-${index}`}>
          <textarea
            rows={1}
            ref={textAreaRef}
            className={styles['form-input']}
            id={`input-${questionNum}-${index}`}
            onChange={(e) => handleChange(e, index)}
            placeholder={labels[0]}
          />
        </Fragment>
      ))}
    </div>
  )
}
