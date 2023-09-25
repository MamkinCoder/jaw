'use client'
import { FooterView } from '@/views/footerView'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { SnackbarProvider } from 'notistack'
import { ReactNode } from 'react'
import styles from 'styles/layout.module.scss'
import '../../styles/globals.scss'

config.autoAddCss = false

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Анкета ВНЧС</title>
      </head>
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
