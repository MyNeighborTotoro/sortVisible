
import { renderArrayList } from './renderFnc';

let compareList = [];

function shellSort( array, arrayList ){
    let i, j, temp;
    let increment = array.length,
        len = array.length;
    do{
        increment = increment/3+1;
        for( i=increment; i<len; i++ ){
            if( array[i]<array[i-increment] ){
                temp = array[i];
                for( j=i-increment; j>0 && temp<array[j]; j-=increment ){
                    array[j+increment]=array[j];
                }
                array[j+increment]=temp;

                compareList.push( [i, j+increment] );
                arrayList.push( array.concat() );
            }
        }
    }while( increment > 1 );

    renderArrayList( arrayList, compareList );
}

export {
    shellSort
}