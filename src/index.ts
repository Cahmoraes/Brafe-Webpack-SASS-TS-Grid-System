import './style/style'
const brafeLogo = require('./assets/images/brafe.png')
const cafe1 = require('./assets/images/cafe-1.jpg')
const cafe2 = require('./assets/images/cafe-2.jpg')
const imgBotafogo = require('./assets/images/botafogo.jpg')
const imgIguatemi = require('./assets/images/iguatemi.jpg')
const imgMineirao = require('./assets/images/mineirao.jpg')

document.querySelectorAll('.logo-brafe')?.forEach(img => img.setAttribute('src', brafeLogo.default))
document.querySelector('#cafe-1')?.setAttribute('src', cafe1.default)
document.querySelector('#cafe-2')?.setAttribute('src', cafe2.default)
document.querySelector('#imgBotafogo')?.setAttribute('src', imgBotafogo.default)
document.querySelector('#imgIguatemi')?.setAttribute('src', imgIguatemi.default)
document.querySelector('#imgMineirao')?.setAttribute('src', imgMineirao.default)

const menu = document.querySelector('[data-menu]')!

menu.addEventListener('click', event => {
  const target = event.currentTarget as HTMLElement
  target.firstElementChild!.classList.toggle('ativo')
})