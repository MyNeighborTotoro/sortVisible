'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bubbleSort = undefined;

var _renderFnc = require('./renderFnc');

var compareList = [];

function bubbleSort(array, arrayList) {
    compareList = [];
    var len = array.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                compareList.push([j, j + 1]);
                arrayList.push(array.concat());
            }
        }
    }
    (0, _renderFnc.renderArrayList)(arrayList, compareList);
}

exports.bubbleSort = bubbleSort;
//# sourceMappingURL=bubbleSort.js.map