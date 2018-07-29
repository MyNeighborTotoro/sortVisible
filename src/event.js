import { init, array, arrayList } from './init'
import { quickSort } from './quickSort'
import { bubbleSort } from './bubbleSort'
import { selectionSort } from './selectionSort'
import { insertionSort } from './insertionSort'
import { shellSort } from './shellSort'

let canStart = false

function clickInit () {
  let rangeSelect = document.querySelector('#range')
  let rangeValue = rangeSelect.value

  let stepRateValue = document.querySelector('#stepRate').value
  let zz = / [^0-9] /

  if (zz.test(stepRateValue) || stepRateValue === '') {
    alert('speed 必须为数字')
    document.querySelector('#stepRate').value = ''
  } else {
    switch (rangeValue) {
      case '0-10' :
        init([0, 10])
        break
      case '0-50' :
        init([0, 50])
        break
      case '0-100' :
        init([0, 100])
        break
    }
  }
  canStart = true
}

function clickStart () {
  if (canStart) {
    canStart = false
    let methodSelect = document.querySelector('#method')
    let methodValue = methodSelect.value
    switch (methodValue) {
      case 'bubbleSort' :
        bubbleSort(array, arrayList)
        break
      case 'selectionSort':
        selectionSort(array, arrayList)
        break
      case 'insertionSort' :
        insertionSort(array, arrayList)
        break
      case 'shellSort' :
        shellSort(array, arrayList)
        break
      case 'quickSort' :
        quickSort(array, arrayList)
        break
    }
  } else {
    alert('请先init')
  }
}

export {
  clickInit,
  clickStart
}
