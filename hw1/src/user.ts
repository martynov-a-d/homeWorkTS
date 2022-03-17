import { renderBlock } from './lib.js'

export function renderUserBlock (elem) {
  const favoritesCaption = elem.favoritesAmount ? elem.favoritesAmount : 'ничего нет'
  const hasFavoriteItems = elem.favoritesAmount ? true : false
  const hasUserName = elem.username
  const hasAvatar = elem.avatarUrl

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${hasAvatar}" alt="${hasUserName}" />
      <div class="info">
          <p class="name">${hasUserName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
