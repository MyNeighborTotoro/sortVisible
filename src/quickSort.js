
import { renderArrayList } from './renderFnc';


let compareList = [];
let pivotList = [];

function qSort(array, arrayList, left, right, compareList, pivotList) {
    if( left < right ){
        let pivot = array[right], i = left-1, temp;
        for( let j=left; j<=right; j++ ){
            if( array[j]<=pivot ){
                i++;
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;

                compareList.push( [i, j] );
                arrayList.push( array.concat() );
                pivotList.push( right );
            }
        }
        qSort( array, arrayList, left, i-1, compareList, pivotList );
        qSort( array, arrayList, i+1, right, compareList, pivotList );
    }
}

function quickSort( array, arrayList ){
    compareList = [];
    pivotList = [];
    qSort( array, arrayList, 0, array.length-1, compareList, pivotList );
    renderArrayList( arrayList, compareList, pivotList );
}

export{
    quickSort
}



