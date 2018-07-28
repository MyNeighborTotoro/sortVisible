'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shellSort = undefined;

var _renderFnc = require('./renderFnc');

var compareList = [];

function shellSort(array, arrayList) {
    var i = void 0,
        j = void 0,
        temp = void 0;
    var increment = array.length,
        len = array.length;
    do {
        increment = increment / 3 + 1;
        for (i = increment; i < len; i++) {
            if (array[i] < array[i - increment]) {
                temp = array[i];
                for (j = i - increment; j > 0 && temp < array[j]; j -= increment) {
                    array[j + increment] = array[j];
                }
                array[j + increment] = temp;

                compareList.push([i, j + increment]);
                arrayList.push(array.concat());
            }
        }
    } while (increment > 1);

    (0, _renderFnc.renderArrayList)(arrayList, compareList);
}

exports.shellSort = shellSort;
//# sourceMappingURL=shellSort.js.map