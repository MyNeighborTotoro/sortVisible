
import { renderArrayList } from './renderFnc';


let compareList =[]; 

function selectionSort( array, arrayList ){
    compareList = [];
    let len = array.length;
    let minIndex, temp;
    for( let i=0; i<len-1; i++ ){
        minIndex = i;
        for( let j=i+1; j<len; j++ ){
            if( array[j] < array[minIndex] )
                minIndex = j;
        }
        temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;

        compareList.push( [i, minIndex] );
        arrayList.push( array.concat() );
    }
    renderArrayList( arrayList, compareList );
}

export {
    selectionSort
}