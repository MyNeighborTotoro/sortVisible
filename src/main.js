
import '../css/index.css'

import { clickInit, clickStart } from './event'

window.onload = function () {
  let initBtn = document.querySelector('#init')
  initBtn.addEventListener('click', clickInit)

  let startBtn = document.querySelector('#start')
  startBtn.addEventListener('click', clickStart)
}
