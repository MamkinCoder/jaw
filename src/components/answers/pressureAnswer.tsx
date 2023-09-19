import { defaultValues, entryData } from '@/views/formData'
import { debounce, isEqual, isString } from 'lodash'
import { ChangeEvent } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'
import styles from 'styles/answer.module.css'

interface PressureAnswerProps extends UseControllerProps<entryData> {}

export function PressureAnswer({ name, control }: PressureAnswerProps) {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      validate: (value) => {
        return !isEqual(value, defaultValues[name]) || 'Ответьте на вопрос'
      },
      pattern: {
        value: /^\d+\\\d+$/,
        message: 'Чего-то не хватает',
      },
    },
  })

  const debouncedCLOG = debounce((e) => console.log(e), 300)

  function handleLeft(event: ChangeEvent<HTMLInputElement>) {
    let newStr = event.target.value
    let result = isString(value) ? value.replace(/.*\\/, newStr + '\\') : ''
    onChange(result)
  }

  function handleRight(event: ChangeEvent<HTMLInputElement>) {
    let newStr = event.target.value
    let result = isString(value) ? value.replace(/\\.*/, '\\' + newStr) : ''
    onChange(result)
  }

  return (
    <div>
      <input
        className={styles['form-input']}
        id={`input-${name}-1`}
        placeholder="110"
        onChange={handleLeft}
        maxLength={3}
        type="number"
      />
      \
      <input
        className={styles['form-input']}
        id={`input-${name}-2`}
        placeholder="70"
        onChange={handleRight}
        maxLength={3}
        type="number"
      />
      {error && <p>{error.message}</p>}
    </div>
  )
}
