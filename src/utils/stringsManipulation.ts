export function splitStringInHalf(string: string): string[] {
  const middle = Math.floor(string.length / 2)
  let position = null
  for (let i = 0; i < string.length / 2; i++) {
    if (string[middle + i] === ' ') {
      position = middle + i
      break
    }
    if (string[middle - i] === ' ') {
      position = middle - i
      break
    }
  }

  let resultArray = [string]

  if (position !== null) {
    const firstPart = string.substring(0, position)
    const secondPart = string.substring(position)
    resultArray = [firstPart, secondPart]
  }

  return resultArray
}

export function countStringArrayLength(string: string[]): number {
  let sum = 0
  for (const str of string) {
    sum += str.length
  }
  return sum
}
