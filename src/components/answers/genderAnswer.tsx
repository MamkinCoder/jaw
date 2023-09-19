import { defaultValues, entryData } from '@/views/formData'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faPerson, faPersonDress } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RadioGroup } from '@headlessui/react'
import { isEqual } from 'lodash'
import { UseControllerProps, useController } from 'react-hook-form'
import styles from 'styles/answer.module.css'

interface GenderAnswerProps extends UseControllerProps<entryData> {}

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
    <RadioGroup value={value} onChange={onChange} as={'div'} className={styles['form-container']}>
      <div>
        <RadioGroup.Option id={`radio-${name}-male`} value={true}>
          {({ checked }) => (
            <div className={`flex items-center ${checked ? 'text-blue-500' : ''}`}>
              {checked ? <FontAwesomeIcon icon={faCircle} /> : <FontAwesomeIcon icon={faPerson} />}
              <RadioGroup.Label id={`radio-${name}-male`}>Мужской</RadioGroup.Label>
            </div>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option id={`radio-${name}-female`} value={false}>
          {({ checked }) => (
            <div className={`flex items-center ${checked ? 'text-blue-500' : ''}`}>
              {checked ? (
                <FontAwesomeIcon icon={faCircle} />
              ) : (
                <FontAwesomeIcon icon={faPersonDress} />
              )}
              <RadioGroup.Label id={`radio-${name}-female`}>Женский</RadioGroup.Label>
            </div>
          )}
        </RadioGroup.Option>
      </div>
      {error && <p>{error.message}</p>}
    </RadioGroup>
  )
}
