import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ReactNode } from 'react'
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
      <body>{children}</body>
    </html>
  )
}
