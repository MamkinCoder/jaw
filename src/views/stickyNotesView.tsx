import { StickyNote } from '@/components/stickyNote'
import { ResponseData } from '@/utils/getData'
import styles from 'styles/stickyNotes.module.scss'

interface StickyNotesViewProps {
  data: ResponseData | null
}

export function StickyNotesView({ data }: StickyNotesViewProps) {
  const questionDataElements =
    data && data.data
      ? Object.keys(data.data).map((key) => {
          const question = data.data![key]

          // Return a TSX element for each question.
          // Replace the following with your desired layout or component
          return <StickyNote key={key} data={data.data[key]}></StickyNote>
        })
      : null

  return <div className={styles['notes-container']}>{questionDataElements}</div>
}
