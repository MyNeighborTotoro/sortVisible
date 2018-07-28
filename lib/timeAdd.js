'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


function timeAdd(speed) {
    var time = document.querySelector('#time');
    time.value = parseInt(time.value) + parseInt(speed);
}

exports.timeAdd = timeAdd;
//# sourceMappingURL=timeAdd.js.map