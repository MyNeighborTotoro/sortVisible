'use strict';

require('../css/index.css');

var _event = require('./event');

window.onload = function () {

    var initBtn = document.querySelector('#init');
    initBtn.addEventListener('click', _event.clickInit);

    var startBtn = document.querySelector('#start');
    startBtn.addEventListener('click', _event.clickStart);
};
//# sourceMappingURL=main.js.map