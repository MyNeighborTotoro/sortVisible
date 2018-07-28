'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.insertionSort = undefined;

var _renderFnc = require('./renderFnc');

var compareList = [];

function insertionSort(array, arrayList) {
    compareList = [];
    var len = array.length;
    var preIndex = void 0,
        current = void 0;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = array[i];
        while (preIndex >= 0 && array[preIndex] > current) {
            array[preIndex + 1] = array[preIndex];
            preIndex--;
        }
        array[preIndex + 1] = current;

        compareList.push([preIndex, i]);
        arrayList.push(array.concat());
    }
    (0, _renderFnc.renderArrayList)(arrayList, compareList);
}

exports.insertionSort = insertionSort;
//# sourceMappingURL=insertionSort.js.map