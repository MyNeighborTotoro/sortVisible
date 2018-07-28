'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var array = [];
var arrayList = [];
var perWidth = void 0;
var speed = void 0;

function init(range) {
    exports.array = array = [];
    exports.arrayList = arrayList = [];

    var stepRate = document.querySelector('#stepRate');
    var stepRateValue = stepRate.value;
    exports.speed = speed = stepRateValue;

    var time = document.querySelector('#time');
    time.value = '0';

    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(131, 240, 198)";
    ctx.strokeStyle = "black";

    var cWidth = canvas.width;
    var cHeight = canvas.height;

    var _range = _slicedToArray(range, 2),
        min = _range[0],
        max = _range[1];

    exports.perWidth = perWidth = cWidth / max;

    ctx.clearRect(0, 0, cWidth, cHeight);

    for (var i = 0; i < max; i++) {

        var w = perWidth;
        var h = Math.ceil(Math.random() * cHeight);

        array.push(h);

        var x = perWidth * i;
        var y = cHeight - h;

        ctx.fillRect(x, y, w, h);
        ctx.strokeRect(x, y, w, h);
    }
}

exports.init = init;
exports.array = array;
exports.arrayList = arrayList;
exports.perWidth = perWidth;
exports.speed = speed;
//# sourceMappingURL=init.js.map