import { NUMBER_MAP } from "./nvmbers"

const constructRomanNumeral = (number) => {
  if (number === 0)                 { return '' }
  if (NUMBER_MAP[number])           { return NUMBER_MAP[number] }
  if (number < 4)                   { return 'I'.repeat(number) }
  if (number === 4)                 { return 'IV' }
  if (number === 5)                 { return 'V' }
  if (number > 5 && number < 9)     { return 'V' + 'I'.repeat(number - 5) }
  if (number === 9)                 { return 'IX' }
  if (number > 20 && number < 40)   { return 'X'.repeat(number/10) }
  if (number > 50 && number < 90)   { return 'L' + 'X'.repeat((number - 50) / 10) }
  if (number == 90)                 { return 'XC' }
  if (number > 100 && number < 400) { return 'C'.repeat(number / 100) }
  if (number === 400)               { return 'CD' }
  if (number > 500 && number < 800) { return 'D' + 'C'.repeat((number - 500) / 100) }
  if (number === 900)               { return 'CM' }
  if (number > 1000)                { return 'M'.repeat(number / 1000) }

  return ''
}

const initialStep = 1
const stepFactor = 10

const toRomanFromInteger = (input) => {
  let step = initialStep

  while (step * stepFactor <= input) {
    step *= stepFactor
  }

  let romanNumber = ''
  let number = input

  while (step >= 1) {
    const factor = Math.floor(number / step)

    if (factor === 0) {
      step /= stepFactor

      continue
    }

    const numeral = constructRomanNumeral(factor * step)

    romanNumber += numeral
    number = number - (factor * step)

    step /= stepFactor
  }

  return romanNumber
}

export default toRomanFromInteger
