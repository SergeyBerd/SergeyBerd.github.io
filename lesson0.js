const unsortedArray = [];

let arrLength = 0;

function ADD() {
    arrLength++;
    size.innerHTML = 'SIZE: ' + arrLength;
}
function MUL() {
    arrLength--;
    if (arrLength <= 0) arrLength = 0;
    size.innerHTML = 'SIZE:' + arrLength;
}
function DELITE() {  
    for(let i = arrLength;i > 0;i--){
        unsortedArray.pop(i);
        arr.innerHTML = 'unsorted array: ' + unsortedArray;
    }
}
function createArray(){
    for(let i = 0;i < arrLength;i++){
        let j = getRandonInt(0, 9);
    unsortedArray.push(j);
    }
    arr.innerHTML = 'unsorted array: ' + unsortedArray;
}
let count,
    count1,
    count2,
    count3,
    count4,
    int;

function searchInt(){
    count = 0,count1 = 0;
    item4.innerHTML = linearSearch(unsortedArray, int);
    item5.innerHTML =  binarySearch(unsortedArray, int);
    item6.innerHTML = fact(int);
    item7.innerHTML = fibonachi(int);
    counts.innerHTML = 'count: ' + count;
    counts1.innerHTML = 'count: ' + count1;   
}
function a() {
    int = 0;
    searchInt();
}
function b() {
    int = 1;
    searchInt();
}
function c() {
    int = 2;
    searchInt();
}
function d() {
    int = 3;
    searchInt();
}
function e() {
    int = 4;
    searchInt();
}
function f() {
    int = 5;
    searchInt();
}
function g() {
    int = 6;
    searchInt();
}
function h() {
    int = 7;
    searchInt();
}
function i() {
    int = 8;
    searchInt();
}
function j() {
    int = 9;
    searchInt();
}
document.getElementById('start').addEventListener('click', () => {
    count2 = 0;
    item1.innerHTML = selectionSort(unsortedArray);
    counts2.innerHTML = 'count: ' + count2;
});
document.getElementById('start1').addEventListener('click', () => {
    count3 = 0;
    item2.innerHTML = bubbleSort(unsortedArray);
    counts3.innerHTML = 'count: ' + count3;
});
document.getElementById('start2').addEventListener('click', () => {
    count4 = 0;
    item3.innerHTML = quickSort(unsortedArray);
    counts4.innerHTML = 'count: ' + count4;
});