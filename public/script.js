'use strict'

import { sendUrl } from './api/index.js'

const button = document.querySelector('#copy')
const input = document.querySelector('.url-input')

button.addEventListener('click', async () => {
  await sendUrl(input.value)
  input.value = ''
})
