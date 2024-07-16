let arr_iter = [];
let arr_rec = [];
function fibs(num){
    if (num < 1) return [];

    arr_iter.push(0);
    if (num === 1) return arr_iter;

    arr_iter.push(1);
    for (let i = 2; i < num; i++) {
        arr_iter.push(arr_iter[i - 1] + arr_iter[i - 2]);
    }
    return arr_iter;
}



function fibsRec(num){
    if (num === 1){
        return 0;
    }
    if (num === 2){
        return 1;
    }
    return fibsRec(num-1)+fibsRec(num-2);
}

console.log(fibs(8))
console.log(fibsRec(8));