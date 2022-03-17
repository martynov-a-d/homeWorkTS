import { renderBlock } from './lib.js'

export function renderSearchFormBlock () {
  interface SearchFormData {
    city: string,
    checkInDate: string,
    checkOutDate: string
  }
  const initValue: SearchFormData = {
    city: 'Санкт-Петербург',
    checkInDate: '2021-05-11',
    checkOutDate: '2021-05-13'
  }
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value=${initValue.city} />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${initValue.checkInDate} min=${initValue.checkInDate} max="2021-06-30" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${initValue.checkOutDate} min=${initValue.checkInDate} max="2021-06-30" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button id="btnSearch">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
  const btnSearch = document.getElementById('btnSearch')
  btnSearch.addEventListener('click', (event) => {
    event.preventDefault()
    const checkInValue = <HTMLInputElement>document.getElementById('check-in-date')
    const checkOutValue = <HTMLInputElement>document.getElementById('check-out-date')
    const cityValue = <HTMLInputElement>document.getElementById('city')
    initValue.checkInDate = `${checkInValue.value}`
    initValue.checkOutDate = `${checkOutValue.value}`
    initValue.city = `${cityValue.value}`
    console.log(initValue);
  })
}
