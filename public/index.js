import {fromRoman, toRoman, isRomanNumber} from './../src/roman'

function transform(event) {
  const value = event.target.value

  if (value === '') {
    return {value: ''}
  }

  const isArabicNumber = !isNaN(value)
  const isRoman = isRomanNumber(value)

  if (!isArabicNumber && !isRoman) {
    throw new Error('Not a valid number!')
  }

  return {
    value: isRoman ? fromRoman(value) : toRoman(value),
    toRoman: isRoman
  }
}

function renderResult(resultElement, value) {
  resultElement.innerHTML = ''
  const result = document.createTextNode(value)
  resultElement.appendChild(result)
}

function setUpListeners() {
  const inputElement = window.document.querySelector('.main-input')
  const resultElement = window.document.querySelector('.results')

  function handleChange(event) {

    try {
      const {value, toRoman} = transform(event)

      renderResult(resultElement, value)
    } catch (error) {
      renderResult(resultElement, error.message)
    }
  }


  inputElement.addEventListener('keyup', handleChange)
}
window.addEventListener('load', setUpListeners)
