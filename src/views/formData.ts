export type EntryData = {
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

export const defaultValues: EntryData = {
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

// export const defaultValues: EntryData = {
//   age: 13,
//   gender: true,
//   q1: [true, true, true],
//   q2: '420\\69',
//   q3: [true, false, true],
//   q4: [true, false, true],
//   q5: [true, false, false],
//   q6: [true, false, false],
//   q7: [true, false, false],
//   q8: [true, false],
//   q9: [true, false, false],
//   q10: [true, false, false],
//   q11: 'Ligma',
//   q12: [true, false, false],
//   q13: [true, false, false],
// }
