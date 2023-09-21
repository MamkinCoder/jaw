import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import barcode from 'public/images/barcode.png'
import edit from 'public/images/edit.png'
import { MouseEvent, useState } from 'react'
import styles from 'styles/a4.module.scss'
import { FormView } from './formView'

interface A4Props {}

export function A4() {
  let [isOpen, setIsOpen] = useState(false)
  function openDialog(event: MouseEvent<HTMLImageElement>): void {
    setIsOpen(true)
  }

  return (
    <>
      <div className={styles['a4']}>
        {/* MOVE HERE */}
        <FormView />
        <h1 style={{ padding: '8px' }}>Анкета для выявления патологий ВНЧС</h1>
        <div className={styles['organic-paper']}></div>
        <div className={styles['paper-shadow']}></div>
        <div className={styles['paper-highlight']}></div>
        <div className={styles['plastic-bag']}></div>
        <Image onClick={openDialog} src={edit} alt="edit-form" className={styles['edit']} />
        <Image src={barcode} alt="" className={styles['barcode']} />
      </div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className={styles.dialog}>
        <div className={styles['dialog-backdrop']}></div>
        <div className={styles['dialog-body']}>
          <Dialog.Panel>
            {/* <Dialog.Description>This will permanently deactivate your account</Dialog.Description> */}
            <FormView>
              <Dialog.Title>Анкета для выявления патологий ВНЧС</Dialog.Title>
            </FormView>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
