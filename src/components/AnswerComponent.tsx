'use client'
import React, { ChangeEvent, FC, useRef, useState } from 'react'
import style from '../../styles/answer.module.css'

interface AnswerComponentProps {
  answers: string[]
}

const Answer: FC<AnswerComponentProps> = ({ answers }) => {
  const [inputValues, setInputValues] = useState<string[]>()
  const textAreaRefs = useRef<(HTMLTextAreaElement | null)[]>([])

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
    index: number,
  ) => {
    //   const newValue = event.target.value;
    //   setInputValues((prevValues) => {
    //     const updatedValues = [...prevValues];
    //     updatedValues[index] = newValue;
    //     return updatedValues;
    //   });

    if (textAreaRefs.current[index]) {
      const textArea = textAreaRefs.current[index]
      if (textArea) {
        const textArea = event.target
        textArea.rows = 1 // Reset rows to recalculate
        const lines = textArea.value.split('\n').length
        textArea.rows = lines // Set rows based on number of lines
      }
    }
  }

  return (
    <div className={style['form-container']}>
      {answers.map((value, index) => (
        <React.Fragment key={`fragment-${index}`}>
          <label
            className={style['form-label']}
            htmlFor={`input-${value}-${index}`}
          >
            {value}
          </label>
          <textarea
            rows={1}
            ref={(ref) => (textAreaRefs.current[index] = ref)}
            className={style['form-input']}
            id={`input-${value}-${index}`}
            // value={value}
            onChange={(e) => handleChange(e, index)}
            placeholder={`Ответ на вопрос ${index + 1}`}
          />
        </React.Fragment>
      ))}
    </div>
  )
}

export default Answer
