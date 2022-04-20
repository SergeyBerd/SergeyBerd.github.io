function binarySearch(array, item){
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = 'null';
    while (found === false && start <= end) {
        count1++;
        middle = Math.floor((start + end) / 2);
        if(array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1;
        }else {
            start = middle + 1;
        }
    }
    return position;
}