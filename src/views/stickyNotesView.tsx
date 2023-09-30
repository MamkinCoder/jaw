import { StickyNote } from '@/components/stickyNote'
import { labels, questions } from '@/strings/labels'
import { ResponseData } from '@/utils/getData'
import { countStringArrayLength, splitStringInHalf } from '@/utils/stringsManipulation'
import styles from 'styles/stickyNotes.module.scss'

interface StickyNotesViewProps {
  data: ResponseData | null
}

export function StickyNotesView({ data }: StickyNotesViewProps) {
  const questionDataElements =
    data && data.data
      ? Object.keys(data.data).map((key) => {
          const question = data.data[key]
          const growIndex = questions[key].length + countStringArrayLength(labels[key])
          return (
            <StickyNote
              key={key}
              data={question}
              labels={labels[key]}
              text={splitStringInHalf(questions[key])}
              style={{ width: 0.7 * growIndex + 300 + 'px', height: 1.5 * growIndex + 300 + 'px' }}
            ></StickyNote>
          )
        })
      : null
  return <>{questionDataElements}</>
}
