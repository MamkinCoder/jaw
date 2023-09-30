import { EntryData, defaultValues } from '@/views/formData'
import { faPerson, faPersonDress } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RadioGroup } from '@headlessui/react'
import { isEqual } from 'lodash'
import { UseControllerProps, useController } from 'react-hook-form'
import styles from 'styles/form.module.scss'

interface GenderAnswerProps extends UseControllerProps<EntryData> {}

export function GenderAnswer({ control, name }: GenderAnswerProps) {
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
    },
  })
  return (
    <RadioGroup value={value} onChange={onChange} className={styles['form-gender']}>
      <RadioGroup.Option id={`radio-${name}-male`} value={true}>
        {({ checked }) => (
          <div>
            <RadioGroup.Label id={`radio-${name}-male`} className={checked ? 'selected' : ''}>
              <FontAwesomeIcon icon={faPerson} />
            </RadioGroup.Label>
          </div>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option id={`radio-${name}-female`} value={false}>
        {({ checked }) => (
          <div>
            <RadioGroup.Label id={`radio-${name}-female`} className={checked ? 'selected' : ''}>
              <FontAwesomeIcon icon={faPersonDress} />
            </RadioGroup.Label>
          </div>
        )}
      </RadioGroup.Option>
      {error && <p className={styles.error}>{error.message}</p>}
    </RadioGroup>
  )
}
