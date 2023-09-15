import { RadioAnswer } from './answers/radioAnswer'
import { TextFieldAnswer } from './answers/textFieldAnswer'

interface AgeGenderProps {}

export function AgeGender({}: AgeGenderProps) {
  return (
    <>
      <label>
        Ваш возраст
        <TextFieldAnswer label="" />
      </label>
      <label>
        Ваш пол
        <RadioAnswer labels={['Мужчина', 'Женщина']} />
      </label>
    </>
  )
}
