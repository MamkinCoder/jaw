import { pt_mono } from '@/app/layout'
import { GenderData, QuestionData } from '@/utils/getData'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import classNames from 'classnames'
import { CSSProperties, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import styles from 'styles/stickyNotes.module.scss'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface StickyNoteProps {
  data: QuestionData
  labels: string[]
  text: string[]
  style?: CSSProperties | undefined
}

const fontFamily = "'PT Mono', monospace"
const fontColor = '#160c28'

export function StickyNote({ data, labels, text, style }: StickyNoteProps) {
  useEffect(() => {
    ChartJS.defaults.color = fontColor
  }, [])
  const options: ChartOptions<'bar'> = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            family: fontFamily,
          },
        },
      },
      tooltip: {
        titleFont: {
          family: fontFamily,
        },
        bodyFont: {
          family: fontFamily,
        },
      },
      title: {
        display: true,
        text,
        font: {
          family: fontFamily,
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          callback: function (value, index, values) {
            return value + '%'
          },
          font: {
            family: fontFamily,
          },
        },
      },
      x: {
        ticks: {
          font: {
            family: fontFamily,
          },
        },
      },
    },
  }

  const labelsData = Object.keys(data.data.male) as (keyof GenderData)[]

  const dataSet = {
    labels,
    datasets: [
      {
        label: 'Мужчины',
        data: labelsData.map((label) => {
          const value = data.data.male[label]
          if (typeof value === 'number') return value * 100
          return value
        }),
        backgroundColor: 'rgba(142, 220, 230, 0.5)',
      },
      {
        label: 'Женщины',
        data: labelsData.map((label) => {
          const value = data.data.female[label]
          if (typeof value === 'number') return value * 100
          return value
        }),
        backgroundColor: 'rgba(238, 66, 102, 0.5)',
      },
    ],
  }
  return (
    <div className={classNames(styles.note, pt_mono.className)} style={style}>
      {labelsData[0] === 'most_common_string' ? (
        <>
          <h3>{text}</h3>
          <h4>Самое частое у мужчин:</h4>
          <p>{data.data.male.most_common_string}</p>
          <h4>Самое частое у женщин:</h4>
          <p>{data.data.female.most_common_string}</p>
        </>
      ) : (
        <Bar options={options} data={dataSet} />
      )}
    </div>
  )
}
