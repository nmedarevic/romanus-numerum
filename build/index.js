import {fromRoman, toRoman, isRomanNumber} from './dist/roman/index.js'

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

function render(resultElement, value) {
  resultElement.innerHTML = ''
  const result = document.createTextNode(value)
  resultElement.appendChild(result)
}

function setUpListeners() {
  const inputElement = window.document.querySelector('.main-input')
  const resultElement = window.document.querySelector('.results')

  const helpElement = window.document.querySelector('.help')
  const helpPlaceholderElement = window.document.querySelector('.help-placeholder')

  inputElement.focus()

  function handleChange(event) {
    try {
      const {value, toRoman} = transform(event)

      render(resultElement, value)
    } catch (error) {
      render(resultElement, error.message)
    }
  }

  function handleHelp() {
    helpElement.classList.toggle('open')
    helpPlaceholderElement.classList.toggle('hidden')
  }

  inputElement.addEventListener('keyup', handleChange)
  helpElement.addEventListener('click', handleHelp)
}

window.addEventListener('load', setUpListeners)
