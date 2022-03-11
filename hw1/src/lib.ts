export function renderBlock (elementId, html) {
  const element = document.getElementById(elementId)
  element.innerHTML = html
}

export function renderToast (message, action) {
  let messageText = ''
  
  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
  }
  
  renderBlock(
    'toast-block',
    messageText
  )

  const button = document.getElementById('toast-main-action')
  if (button != null) {
    button.onclick = function() {
      if (action != null && action.handler != null) {
        action.handler()
      }
      renderToast(null, null)
    }
  }
}

export function localStorageHandler() {
  const returnObj: string = JSON.parse(localStorage.getItem('user'))
  for(const key of Object.keys(returnObj)) {
    switch (key) {
    case 'username' :
    case 'avatarUrl' :
      getUserData(key, returnObj[key])
      break;
    case 'favoritesAmount' :
      getFavoritesAmount(key, returnObj[key])
      break
    default:
      break;
    }
  }
}
export const dataFromLocal = {}
/**
 * 
 * @param params Ключ : значение из localStorage
 * @param dataFromLocal Пустой массив в который передать params
 */
function getUserData(key: string, params: unknown) {
  return dataFromLocal[key] = params
}
/**
 * 
 * @param params Ключ : значение из localStorage
 * @param dataFromLocal Пустой массив в который передать params
 */
function getFavoritesAmount(key: string, params: unknown) {
  return dataFromLocal[key] = params
}

