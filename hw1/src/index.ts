/* eslint-disable indent */
/* eslint-disable no-undef */
import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { localStorageHandler, renderToast, dataFromLocal } from './lib.js'

// eslint-disable-next-line no-constant-condition
if(typeof window) {
  window.addEventListener('DOMContentLoaded', () => {
    const preObj = {
      username: 'Wade Warren',
      avatarUrl: '/img/avatar.png',
      favoritesAmount: '3'
    }
    const localObj = JSON.stringify(preObj)
    localStorage.setItem('user', localObj)
    localStorageHandler()
    renderUserBlock(dataFromLocal)
    renderSearchFormBlock()
    renderSearchStubBlock()
    renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
    )
  })
}
