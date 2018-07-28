
import { renderArrayList } from './renderFnc';


let compareList = [];

function bubbleSort( array, arrayList ){
    compareList = [];
    let len = array.length;
    for( let i=0; i<len; i++ ){
        for( let j=0; j<len-1-i; j++ ){
            if( array[j] > array[j+1] ){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                compareList.push( [j, j+1] );
                arrayList.push( array.concat() );
            }
        }
    }
    renderArrayList( arrayList, compareList );
}

export {
    bubbleSort
}