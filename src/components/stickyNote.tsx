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
import { Bar } from 'react-chartjs-2'
import styles from 'styles/stickyNotes.module.scss'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface StickyNoteProps {
  data: QuestionData
}

export function StickyNote({ data }: StickyNoteProps) {
  const options: ChartOptions<'bar'> = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: data.text,
      },
    },
  }

  const labelNames: { [K in keyof GenderData]?: string } = {
    average_0: 'Вариант 1',
    average_1: 'Вариант 2',
    average_2: 'Вариант 3',
    average_all_false: 'Вариант все',
    most_common_string: 'Самая частая болезнь',
  }

  const labels = Object.keys(data.data.male) as (keyof GenderData)[]

  const mockData = {
    labels: labels.map((label) => labelNames[label] || label),
    datasets: [
      {
        label: 'Мужчины',
        data: labels.map((label) => data.data.male[label]),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Женщины',
        data: labels.map((label) => data.data.female[label]),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  return (
    <div className={styles.note}>
      <Bar options={options} data={mockData} />
    </div>
  )
}
