'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clickStart = exports.clickInit = undefined;

var _init = require('./init');

var _quickSort = require('./quickSort');

var _bubbleSort = require('./bubbleSort');

var _selectionSort = require('./selectionSort');

var _insertionSort = require('./insertionSort');

var _shellSort = require('./shellSort');

var canStart = false;

function clickInit() {
    var rangeSelect = document.querySelector('#range');
    var rangeValue = rangeSelect.value;

    var stepRateValue = document.querySelector('#stepRate').value;
    var zz = / [^0-9] /;

    if (zz.test(stepRateValue) || stepRateValue == '') {
        alert('speed 必须为数字');
        document.querySelector('#stepRate').value = '';
    } else {
        switch (rangeValue) {
            case '0-10':
                (0, _init.init)([0, 10]);
                break;
            case '0-50':
                (0, _init.init)([0, 50]);
                break;
            case '0-100':
                (0, _init.init)([0, 100]);
                break;

        }
    }
    canStart = true;
}

function clickStart() {
    if (canStart) {
        canStart = false;
        var methodSelect = document.querySelector('#method');
        var methodValue = methodSelect.value;
        switch (methodValue) {
            case 'bubbleSort':
                (0, _bubbleSort.bubbleSort)(_init.array, _init.arrayList);
                break;
            case 'selectionSort':
                (0, _selectionSort.selectionSort)(_init.array, _init.arrayList);
                break;
            case 'insertionSort':
                (0, _insertionSort.insertionSort)(_init.array, _init.arrayList);
                break;
            case 'shellSort':
                (0, _shellSort.shellSort)(_init.array, _init.arrayList);
                break;
        }
    } else {
        alert('请先init');
    }
}

exports.clickInit = clickInit;
exports.clickStart = clickStart;
//# sourceMappingURL=event.js.map