'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderArrayList = undefined;

var _init = require('./init');

function timeAdd(speed) {
    var time = document.querySelector('#time');
    time.value = parseInt(time.value) + parseInt(speed);
}

function renderArray(array, compareArray) {
    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(131, 240, 198)";
    ctx.strokeStyle = "black";

    var cWidth = canvas.width;
    var cHeight = canvas.height;
    canvas.height = canvas.height;
    ctx.clearRect(0, 0, cWidth, cHeight);

    var c1 = compareArray[0];
    var c2 = compareArray[1];

    array.map(function (item, index) {
        var w = _init.perWidth;
        var h = item;
        var x = w * index;
        var y = cHeight - h;

        if (index == c1 || index == c2) {
            ctx.fillStyle = "rgb(253, 205, 141)";
        } else {
            ctx.fillStyle = "rgb(131, 240, 198)";
        }

        ctx.fillRect(x, y, w, h);
        ctx.strokeRect(x, y, w, h);
    });
}

function renderArrayWithPivot(array, compareArray, pivot) {
    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');

    var cWidth = canvas.width;
    var cHeight = canvas.height;
    ctx.clearRect(0, 0, cWidth, cHeight);
    canvas.height = canvas.height;

    var c1 = compareArray[0];
    var c2 = compareArray[1];

    array.map(function (item, index) {
        var w = _init.perWidth;
        var h = item;
        var x = w * index;
        var y = cHeight - h;

        if (index == c1 || index == c2) {
            ctx.fillStyle = "rgb(253, 205, 141)";
        } else if (index == pivot) {
            ctx.fillStyle = "rgb(240, 131, 231)";
        } else {
            ctx.fillStyle = "rgb(131, 240, 198)";
        }

        ctx.strokeStyle = "black";
        ctx.fillRect(x, y, w, h);
        ctx.strokeRect(x, y, w, h);

        // if( index == array.length-1 ){
        //     ctx.strokeStyle = "rgb(240, 131, 231)";
        //     ctx.moveTo( 0, cHeight-array[pivot] );
        //     ctx.lineTo( cWidth, cHeight-[array-pivot] );
        //     ctx.stroke();
        // }
    });
}

function renderArrayList(arrayList, compareList, pivotList) {
    var timer = void 0,
        i = 0;
    timer = setInterval(function () {
        if (i <= arrayList.length) {
            if (i < arrayList.length) {
                if (pivotList) {
                    renderArrayWithPivot(arrayList[i], compareList[i], pivotList[i]);
                } else {
                    renderArray(arrayList[i], compareList[i]);
                }
            } else if (i == arrayList.length) {
                renderArray(arrayList[i - 1], [-1, -1]);
            }
            timeAdd(_init.speed);
            i++;
        } else {
            clearInterval(timer);
        }
    }, _init.speed);
}

exports.renderArrayList = renderArrayList;
//# sourceMappingURL=renderFnc.js.map