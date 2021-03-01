import { NUMBERS } from "../roman/index.js"

export const STACK = {
  stack: [],
  push: (number) => {
    if (typeof number === 'undefined') {
      return
    }

    STACK.stack.push(number)
  },
  pop: (number) => {
    STACK.stack.pop()
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
