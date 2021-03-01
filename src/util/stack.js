import { NUMBERS } from "../roman"

export const STACK = {
  stack: [],
  push: (number) => {
    if (typeof number === 'undefined') {
      return
    }

    STACK.stack.push(number)

    console.log(STACK.stack)
  },
  pop: (number) => {
    STACK.stack.pop()

    console.log(STACK.stack)
  },
  lastOnStack: () => {
    return STACK.stack[STACK.stack.length - 1]
  },
  clear: () => {
    STACK.stack = []
  },
  sumAndClearStack: () => {
    const result = STACK.stack.reduce((acc, item) => acc + NUMBERS[item], 0)

    STACK.clear()

    return result
  },
  isEmpty: () => STACK.stack.length === 0
}
