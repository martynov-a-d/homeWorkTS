/* eslint-disable indent */
/* eslint-disable no-undef */
import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

// eslint-disable-next-line no-constant-condition
if(typeof window) {
  window.addEventListener('DOMContentLoaded', () => {
    renderUserBlock('0')
    renderSearchFormBlock()
    renderSearchStubBlock()
    renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
    )
  })
}
