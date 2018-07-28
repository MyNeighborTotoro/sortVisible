
import { renderArrayList } from './renderFnc';

let compareList = [];

function insertionSort( array, arrayList ){
    compareList = [];
    let len = array.length;
    let preIndex, current;
    for( let i=1; i<len; i++ ){
        preIndex = i-1;
        current = array[i];
        while( preIndex>=0 && array[preIndex]>current ){
            array[preIndex+1] = array[preIndex];
            preIndex--;
        }
        array[preIndex+1] = current;

        compareList.push( [preIndex, i] );
        arrayList.push( array.concat() );
    }
    renderArrayList( arrayList, compareList );
}

export {
    insertionSort
}