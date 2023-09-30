import { EntryData } from '@/views/formData'
import { faSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { debounce, isString } from 'lodash'
import { ChangeEvent } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'
import styles from 'styles/form.module.scss'

interface PressureAnswerProps extends UseControllerProps<EntryData> {}

export function PressureAnswer({ name, control }: PressureAnswerProps) {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      pattern: {
        value: /^\d+\\\d+$/,
        message: 'Укажите Ваше давление',
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

  function getLeftNumber(str: string): number {
    let leftSide = str.split('\\')[0]
    let result = parseInt(leftSide, 10)

    if (isNaN(result)) {
      result = 0
    }

    return result
  }

  function getRightNumber(str: string): number {
    let rightSide = str.split('\\')[1]
    let result = parseInt(rightSide, 10)

    if (isNaN(result)) {
      result = 0
    }

    return result
  }

  return (
    <div>
      <input
        className={styles['form-input-short']}
        id={`input-${name}-1`}
        placeholder="110"
        onChange={handleLeft}
        maxLength={3}
        type="number"
        defaultValue={getLeftNumber(value as string)}
      />
      <FontAwesomeIcon icon={faSlash} />
      <input
        className={styles['form-input-short']}
        id={`input-${name}-2`}
        placeholder="70"
        onChange={handleRight}
        maxLength={3}
        type="number"
        defaultValue={getRightNumber(value as string)}
      />
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  )
}
