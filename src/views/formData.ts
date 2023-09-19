export type entryData = {
  [key: string]: number | boolean[] | boolean | string | null[] | null
  age: number | null
  gender: boolean | null
  q1: boolean[] | null[]
  q2: string
  q3: boolean[] | null[]
  q4: boolean[] | null[]
  q5: boolean[] | null[]
  q6: boolean[] | null[]
  q7: boolean[] | null[]
  q8: boolean[] | null[]
  q9: boolean[] | null[]
  q10: boolean[] | null[]
  q11: string
  q12: boolean[] | null[]
  q13: boolean[] | null[]
}

export const defaultValues: entryData = {
  age: null,
  gender: null,
  q1: [null, null, null],
  q2: '\\',
  q3: [null, null, null],
  q4: [null, null, null],
  q5: [null, null, null],
  q6: [null, null, null],
  q7: [null, null, null],
  q8: [null, null],
  q9: [null, null, null],
  q10: [null, null, null],
  q11: '',
  q12: [null, null, null],
  q13: [null, null, null],
}
