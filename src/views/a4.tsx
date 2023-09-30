import { useForm } from 'react-hook-form'
import styles from 'styles/a4.module.scss'
import { EntryData, defaultValues } from './formData'
import { FormView } from './formView'

interface A4Props {}

export function A4() {
  const form = useForm<EntryData>({ defaultValues })
  return (
    <div className={styles['a4-container']}>
      <p>
        <b>Анкета является дополнительным</b> методом выявления патологий ВНЧС. Для расшифровки
        результатов и постановки диагноза обращаться в клинику «Дентал Студия». Адрес Республика
        Башкортостан, г.Уфа, улица Бакалинская 68/6{' '}
        <a href="tel:+73472536188" className={styles.phone}>
          +7 (347) 253-61-88
        </a>{' '}
        <a href="tel:+73472527087" className={styles.phone}>
          +7 (347) 252-70-87
        </a>{' '}
        Герасимова Лариса Павловна Янтилина Анастасия Александровна Матвиенко Артем Николаевич
      </p>
      <FormView form={form}>
        <h2>Анкета для выявления патологий ВНЧС</h2>
      </FormView>
    </div>
  )
}
