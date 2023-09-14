import styles from 'styles/answer.module.css'
import { ListAnswer } from './answers/listAnswer'
import { RadioAnswer } from './answers/radioAnswer'
import { TextFieldAnswer } from './answers/textFieldAnswer'

export interface AnswerProps {
  answerLabels: string[]
  type: 'radio' | 'list' | 'textfield'
  nothing?: string
  questionNum: number
}

export function Answer({
  answerLabels,
  type,
  nothing = '',
  questionNum: num,
}: AnswerProps) {
  let answerComponent
  switch (type) {
    case 'list':
      answerComponent = (
        <ListAnswer
          questionNum={num}
          nothing={nothing}
          labels={answerLabels}
        ></ListAnswer>
      )
      break
    case 'radio':
      answerComponent = (
        <RadioAnswer questionNum={num} labels={answerLabels}></RadioAnswer>
      )
      break
    case 'textfield':
      answerComponent = (
        <TextFieldAnswer
          questionNum={num}
          labels={answerLabels}
        ></TextFieldAnswer>
      )
      break
    default:
      answerComponent = null
  }

  return <div className={styles['form-container']}>{answerComponent}</div>
}
