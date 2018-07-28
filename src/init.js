
let array = [];
let arrayList = [];
let perWidth;
let speed;

function init( range ){
    array = [];
    arrayList = [];

    let stepRate = document.querySelector('#stepRate');
    let stepRateValue = stepRate.value;
    speed = stepRateValue;

    let time = document.querySelector('#time');
    time.value = '0';

    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(131, 240, 198)";
    ctx.strokeStyle = "black";

    let cWidth = canvas.width;
    let cHeight = canvas.height;
    let [min, max] = range;
    perWidth = cWidth/max;

    ctx.clearRect(0, 0, cWidth, cHeight);
    
    for( let i=0; i<max; i++ ){

        let w = perWidth;
        let h = Math.ceil( Math.random() * cHeight );

        array.push( h );

        let x = perWidth * i;
        let y = cHeight - h;

        ctx.fillRect(x, y, w, h);
        ctx.strokeRect(x, y, w, h);
    }
}

export {
    init,
    array,
    arrayList,
    perWidth,
    speed
}