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
    var increment = 1,
        len = array.length;
    while (increment < len / 3) {
        increment = 3 * increment + 1;
    }
    while (increment >= 1) {
        for (i = increment; i < len; i++) {
            for (j = i; j >= increment && array[j] < array[j - increment]; j -= increment) {
                temp = array[j];
                array[j] = array[j - increment];
                array[j - increment] = temp;

                compareList.push([j, j - increment]);
                arrayList.push(array.concat());
            }
        }
        increment = (increment - 1) / 3;
    }

    (0, _renderFnc.renderArrayList)(arrayList, compareList);
}

exports.shellSort = shellSort;
//# sourceMappingURL=shellSort.js.map