'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.selectionSort = undefined;

var _renderFnc = require('./renderFnc');

var compareList = [];

function selectionSort(array, arrayList) {
    compareList = [];
    var len = array.length;
    var minIndex = void 0,
        temp = void 0;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (array[j] < array[minIndex]) minIndex = j;
        }
        temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;

        compareList.push([i, minIndex]);
        arrayList.push(array.concat());
    }
    (0, _renderFnc.renderArrayList)(arrayList, compareList);
}

exports.selectionSort = selectionSort;
//# sourceMappingURL=selectionSort.js.map