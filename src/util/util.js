import { NUMBERS } from "../roman"

export const isLowerThanLast = (number, prev) => NUMBERS[number] < NUMBERS[prev]
export const isGreaterThanLast = (number, prev) => NUMBERS[number] > NUMBERS[prev]
export const parseRomanInput = (value) => new String(value).toUpperCase().split('')
