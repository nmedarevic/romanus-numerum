import { isGreaterThanLast, isLowerThanLast, parseRomanInput } from "../util/util"
import {STACK} from '../util/stack'
import { NUMBERS } from "./nvmbers"

const calculateRomanToInteger = (romanNumerals) => {
  console.log(romanNumerals)
  const res = romanNumerals.reduce((acc, number, index, array) => {
    if (STACK.isEmpty()) {
      STACK.push(number)

      if (index === array.length - 1) {
        acc += STACK.sumAndClearStack()
      }


      return acc
    }

    const prev = STACK.lastOnStack()

    if (isGreaterThanLast(number, prev)) {
      acc += STACK.sumAndClearStack()

      STACK.push(number)

      return acc
    }

    if (isLowerThanLast(number, prev)) {
      const lowerArg = STACK.sumAndClearStack()

      acc += NUMBERS[number] - lowerArg

      return acc
    }

    STACK.push(number)

    if (index === array.length - 1) {
      acc += STACK.sumAndClearStack()
    }

    return acc
  }, 0)

  STACK.clear()
  return res
}

const fromRoman = (input) => {
  return calculateRomanToInteger(parseRomanInput(input))
}

export default fromRoman
