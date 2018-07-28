'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function renderPivot(array, pivot, index) {
    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(248, 161, 234)";
    ctx.strokeStyle = "black";

    var cWidth = canvas.width;
    var cHeight = canvas.height;
    var max = array.length;
    var perWidth = cWidth / max;

    var x = perWidth * index;
    var y = pivot;

    ctx.clearRect(x, cHeight - y, perWidth, y);
    ctx.fillRect(x, cHeight - y, perWidth, y);
    ctx.strokeRect(x, cHeight - y, perWidth, y);
}

function swapLow(array, low, high) {
    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(131, 240, 198)";
    ctx.strokeStyle = "black";

    var cWidth = canvas.width;
    var cHeight = canvas.height;
    var max = array.length;
    var perWidth = cWidth / max;

    var lowX = perWidth * low;
    var lowY = array[low];
    var highX = perWidth * high;
    var highY = array[high];

    ctx.clearRect(lowX, cHeight - lowY, perWidth, lowY);
    ctx.fillRect(lowX, cHeight - highY, perWidth, highY);
    ctx.strokeRect(lowX, cHeight - highY, perWidth, highY);

    ctx.fillStyle = "rgb(248, 161, 234)";
    ctx.clearRect(highX, cHeight - highY, perWidth, highY);
    ctx.fillRect(highX, cHeight - lowY, perWidth, lowY);
    ctx.strokeRect(highX, cHeight - lowY, perWidth, lowY);

    array[low] = highY;
    array[high] = lowY;
}

function swapHigh(array, low, high) {
    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(248, 161, 234)";
    ctx.strokeStyle = "black";

    var cWidth = canvas.width;
    var cHeight = canvas.height;
    var max = array.length;
    var perWidth = cWidth / max;

    var lowX = perWidth * low;
    var lowY = array[low];
    var highX = perWidth * high;
    var highY = array[high];

    ctx.clearRect(lowX, cHeight - lowY, perWidth, lowY);
    ctx.fillRect(lowX, cHeight - highY, perWidth, highY);
    ctx.strokeRect(lowX, cHeight - highY, perWidth, highY);

    ctx.fillStyle = "rgb(131, 240, 198)";
    ctx.clearRect(highX, cHeight - highY, perWidth, highY);
    ctx.fillRect(highX, cHeight - lowY, perWidth, lowY);
    ctx.strokeRect(highX, cHeight - lowY, perWidth, lowY);

    array[low] = highY;
    array[high] = lowY;
}

function partition(array, low, high) {
    var pivot = void 0;
    pivot = array[low];
    renderPivot(array, pivot, low);

    while (low < high) {
        while (low < high && array[high] >= pivot) {
            high--;
        }
        swapLow(array, low, high);
        while (low < high && array[low] <= pivot) {
            low++;
        }
        swapHigh(array, low, high);
    }
    return low;
}

function qSort(array, low, high) {
    var pivot = void 0;
    if (low < high) {
        pivot = partition(array, low, high);

        qSort(array, low, pivot - 1);
        qSort(array, pivot + 1, high);
    }
}

function qkSort(array) {
    qSort(array, 0, array.length - 1);
}

exports.qkSort = qkSort;
//# sourceMappingURL=qkSort.js.map