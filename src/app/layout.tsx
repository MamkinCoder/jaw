'use client'
import { FooterView } from '@/views/footerView'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import classNames from 'classnames'
import { Playfair, PT_Mono } from 'next/font/google'
import Head from 'next/head'
import { SnackbarProvider } from 'notistack'
import { ReactNode } from 'react'
import styles from 'styles/layout.module.scss'
import '../../styles/globals.scss'

const playfair = Playfair({ weight: ['400', '700'], subsets: ['cyrillic', 'latin'] })
export const pt_mono = PT_Mono({
  weight: '400',
  subsets: ['cyrillic', 'latin'],
  variable: '--font-pt-mono',
})

config.autoAddCss = false

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className={classNames(playfair.className, pt_mono.variable)}>
      <Head>
        <title>Анкета ВНЧС</title>
      </Head>
      <body>
        <SnackbarProvider>
          <div className={styles.board}>{children}</div>
        </SnackbarProvider>
        <footer>
          <FooterView />
        </footer>
      </body>
    </html>
  )
}
