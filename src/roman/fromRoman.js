import { isGreaterThanLast, isLowerThanLast, parseRomanInput } from "../util/util"
import {STACK} from '../util/stack'
import { NUMBERS } from "./nvmbers"

const calculateRomanToInteger = (romanNumerals) => {
  let acc = 0
  let index = 0

  do {
    const number = romanNumerals[index]

    const prev = STACK.lastOnStack()

    STACK.push(number)

    if (isLowerThanLast(number, prev)) {
      STACK.pop()

      acc += STACK.sumAndClearStack()

      STACK.push(number)

      ++index
      continue
    }

    if (isGreaterThanLast(number, prev)) {
      STACK.pop()

      const lowerArg = STACK.sumAndClearStack()

      acc += NUMBERS[number] - lowerArg

      ++index
      continue
    }

    if (index >= romanNumerals.length - 1) {
      acc += STACK.sumAndClearStack()
    }

    ++index
  } while (!STACK.isEmpty())

  return acc
}

const fromRoman = (input) => {
  return calculateRomanToInteger(parseRomanInput(input))
}

export default fromRoman
