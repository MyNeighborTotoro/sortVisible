
import { perWidth, speed } from './init';

function timeAdd( speed ){
    let time = document.querySelector('#time');
    time.value = parseInt( time.value ) + parseInt( speed );
}

function renderArray( array, compareArray ){
    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(131, 240, 198)";
    ctx.strokeStyle = "black";

    let cWidth = canvas.width;
    let cHeight = canvas.height;
    ctx.clearRect(0, 0, cWidth, cHeight);

    let c1 = compareArray[0];
    let c2 = compareArray[1];

    array.map( ( item, index ) => {
        let w = perWidth;
        let h = item;
        let x = w * index;
        let y = cHeight - h;

        if( index == c1 || index == c2 ){
            ctx.fillStyle = "rgb(253, 205, 141)";
        }else{
            ctx.fillStyle = "rgb(131, 240, 198)";
        }

        ctx.fillRect( x, y, w, h );
        ctx.strokeRect( x, y, w, h );
    } )
}

function renderArrayWithPivot( array, compareArray, pivot ){
    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d');

    let cWidth = canvas.width;
    let cHeight = canvas.height;
    ctx.clearRect(0, 0, cWidth, cHeight);

    let c1 = compareArray[0];
    let c2 = compareArray[1];

    array.map( ( item, index ) => {
        let w = perWidth;
        let h = item;
        let x = w * index;
        let y = cHeight - h;

        if( index == c1 || index == c2 ){
            ctx.fillStyle = "rgb(253, 205, 141)";
        }else if( index == pivot ){
            ctx.strokeStyle = "rgb(240, 131, 231)";
            ctx.moveTo( 0, cHeight-item );
            ctx.lineTo( cWidth, cHeight-item );
            ctx.strkoe();
            ctx.fillStyle = "rgb(240, 131, 231)";
        }else{
            ctx.fillStyle = "rgb(131, 240, 198)";
        }

        ctx.strokeStyle = "black";
        ctx.fillRect( x, y, w, h );
        ctx.strokeRect( x, y, w, h );
    } )

}

function renderArrayList( arrayList, compareList, pivotList ){
    let timer, i=0 ;
    timer = setInterval( function (){
        if( i <= arrayList.length ){
            if( i<arrayList.length ){
                if( pivotList ){
                    renderArrayWithPivot( arrayList[i], compareList[i], pivotList[i] );
                }else{
                    renderArray( arrayList[i], compareList[i] );
                }
            }else if( i==arrayList.length ){
                renderArray( arrayList[i-1], [-1,-1] );
            }
            timeAdd( speed );
            i++;
        }else{
            clearInterval( timer );
        }
    }, speed );
}

export {
    renderArrayList
}