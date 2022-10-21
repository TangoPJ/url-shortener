'use strict'

import { sendUrl } from './api/index.js'

const ERROR_MESSAGE = 'The URL is not valid, try again.'
const ERROR_TYPE = 'failure'

const button = document.querySelector('#copy')
const input = document.querySelector('.url-input')
const result = document.querySelector('.result')

button.addEventListener('click', async () => {
  const response = await sendUrl(input.value)
  if (response.type === ERROR_TYPE) {
    result.innerHTML = ERROR_MESSAGE
    result.style.color = '#ff0000'
  } else {
    result.innerHTML = response.message
    result.href = response.message
  }
})

input.addEventListener('click', () => {
  clearForm()
})

const clearForm = () => {
  input.value = ''
  result.innerHTML = ''
}
