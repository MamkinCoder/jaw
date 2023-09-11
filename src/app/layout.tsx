import { ReactNode } from 'react'
import '../../styles/globals.scss'
import styles from '../../styles/layout.module.css'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Анкета ВНЧС</title>
      </head>
      <body className={styles['grid-container']}>{children}</body>
    </html>
  )
}
