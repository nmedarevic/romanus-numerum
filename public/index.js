import {fromRoman, toRoman, isRomanNumber} from './../src/roman'
// import { isRomanNumber } from './../src/roman/nvmbers'

function transform(event) {
  const value = event.target.value

  console.log('input', value)

  if (value === '') {
    return {value: ''}
  }

  const isArabicNumber = !isNaN(value)
  const isRoman = isRomanNumber(value)

  if (!isArabicNumber && !isRoman) {
    throw new Error()
  }

  return {
    value: isRoman ? fromRoman(value) : toRoman(value),
    toRoman: isRoman
  }
}


function setUpListeners() {
  const inputElement = window.document.querySelector('.main-input')
  const resultElement = window.document.querySelector('.results')

  function handleChange(event) {

    try {
      const {value, toRoman} = transform(event)

      resultElement.innerHTML = ''
      const result = document.createTextNode(value)

      resultElement.appendChild(result)
    } catch (error) {
      console.log('dsad')
    }
  }


  inputElement.addEventListener('keyup', handleChange)
}
window.addEventListener('load', setUpListeners)
