function fact(n) {
    return (n != 1) ? n * fact(n - 1) : 1;
}
const fibonachi = (n) => {
    if (n === 1 || n === 2){
        return 1;
    }
    return fibonachi(n-1) + fibonachi(n-2);
}