export const NUMBERS = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

export const NUMBER_MAP = Object.keys(NUMBERS).reduce((acc, key) => ({
  ...acc,
  [NUMBERS[key]]: key
}), {})

const numbersArray = Object.keys(NUMBERS)
const includesAllRomanNumerals = (char) => numbersArray.includes(char)

export const isRomanNumber = (number) => {
  const isNotInteger = isNaN(number)
  const containsAllRomanNumerals = number.split('').every(includesAllRomanNumerals)

  return isNotInteger && containsAllRomanNumerals
}
