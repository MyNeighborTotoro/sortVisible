
import { renderArrayList } from './renderFnc';

let compareList = [];

function shellSort( array, arrayList ){
    let i, j, temp;
    let increment = 1,
        len = array.length;
    while( increment < len/3 ){
        increment = 3*increment + 1;
    }
    while( increment>=1 ){
        for( i=increment; i<len; i++ ){
            for( j=i; j>=increment && array[j]<array[j-increment]; j-=increment ){
                temp = array[j];
                array[j] = array[j-increment];
                array[j-increment] = temp;

                compareList.push( [j, j-increment] );
                arrayList.push( array.concat() );
            }
        }
        increment = ( increment-1 )/3;
    }

    renderArrayList( arrayList, compareList );
}

export {
    shellSort
}