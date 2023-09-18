import { RefObject, useRef } from 'react'

export function useFormKeysRefs(keys: string[]) {
  const refs: { [key: string]: RefObject<HTMLLabelElement> } = {}

  keys.forEach((key) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    refs[key] = useRef<HTMLLabelElement>(null)
  })

  return refs
}
