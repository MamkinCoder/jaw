export type entryData = {
  [key: string]: number | boolean[] | string
  age: number
  gender: boolean[]
  q1: boolean[]
  q2: string
  q3: boolean[]
  q4: boolean[]
  q5: boolean[]
  q6: boolean[]
  q7: boolean[]
  q8: boolean[]
  q9: boolean[]
  q10: boolean[]
  q11: string
  q12: boolean[]
  q13: boolean[]
}

export const defaultValues: entryData = {
  age: 0,
  gender: [false, false],
  q1: [false, false, false],
  q2: '\\',
  q3: [false, false, false],
  q4: [false, false, false],
  q5: [false, false, false],
  q6: [false, false, false],
  q7: [false, false, false],
  q8: [false, false],
  q9: [false, false, false],
  q10: [false, false, false],
  q11: '',
  q12: [false, false, false],
  q13: [false, false, false],
}
