function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i+1; j < array.length; j++){
            if (array[j] < array[indexMin]) {
                indexMin = j;
        }
        count2++;
    }
    if (indexMin != i){
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
    }
}
return array;
}
console.log(selectionSort(unsortedArray));