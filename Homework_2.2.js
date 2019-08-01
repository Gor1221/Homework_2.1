function flatterArray(arr, newArr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (typeof arr[ i ] === 'number') {
            newArr = newArr.concat(arr[i]);
        } else if (typeof arr[ i ] === 'object') {
            newArr = flatterArray(arr[ i ], newArr);
        }
    }
    return newArr;
}


console.log(flatterArray([ 1, [ 3, 4, [ 1, 2 ] ], 10 ], newArr = []));  