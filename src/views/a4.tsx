import { Dialog } from '@headlessui/react'
import classNames from 'classnames'
import Image from 'next/image'
import barcode from 'public/images/barcode.png'
import edit from 'public/images/edit.png'
import { MouseEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from 'styles/a4.module.scss'
import { defaultValues, entryData } from './formData'
import { FormView } from './formView'

interface A4Props {}

export function A4() {
  const [isOpen, setIsOpen] = useState(false)
  const form = useForm<entryData>({ defaultValues })

  function openDialog(event: MouseEvent<HTMLAnchorElement> | MouseEvent<HTMLImageElement>): void {
    form.reset()
    setIsOpen(true)
  }

  return (
    <>
      <div className={styles['a4-container']}>
        <p>
          Анкета является дополнительным методом выявления патологий ВНЧС. Для расшифровки
          результатов и постановки диагноза обращаться в клинику «Дентал Студия». Адрес Республика
          Башкортостан, г.Уфа, улица Бакалинская 68/6 +73472536188 +73472527087 Герасимова Лариса
          Павловна Янтилина Анастасия Александровна Матвиенко Артем Николаевич
        </p>
        <div className={styles['a4']}>
          <a
            onClick={openDialog}
            className={
              form.formState.isSubmitted
                ? classNames(styles['form-preview'])
                : classNames(styles['form-preview'], styles['move-up'])
            }
          >
            <FormView form={form}>
              <h2>Анкета для выявления патологий ВНЧС</h2>
            </FormView>
          </a>
          {!form.formState.isSubmitted && (
            <>
              <h1 className={styles.cover}>Анкета для выявления патологий ВНЧС</h1>
              <div className={styles['organic-paper']}></div>
              <div className={styles['paper-shadow']}></div>
              <div className={styles['paper-highlight']}></div>
            </>
          )}
          <div className={styles['plastic-bag']}></div>

          <Image onClick={openDialog} src={edit} alt="edit-form" className={styles['edit']} />
          <Image src={barcode} alt="" className={styles['barcode']} />
        </div>
      </div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className={styles.dialog}>
        <div className={styles['dialog-backdrop']}></div>
        <div className={styles['dialog-body']}>
          <Dialog.Panel>
            {/* <Dialog.Description>This will permanently deactivate your account</Dialog.Description> */}
            <FormView form={form} setModal={setIsOpen}>
              <Dialog.Title>Анкета для выявления патологий ВНЧС</Dialog.Title>
            </FormView>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
