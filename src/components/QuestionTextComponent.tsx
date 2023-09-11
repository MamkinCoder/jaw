interface QuestionTextComponentProps {
  text: string
}

export function QuestionText({ text }: QuestionTextComponentProps) {
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}
