function merge(arr, l, m, r) {
    let arr1 = arr.slice(l, m + 1);
    let arr2 = arr.slice(m + 1, r + 1);

    let i = 0, j = 0, k = l;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            arr[k] = arr1[i];
            i++;
        } else {
            arr[k] = arr2[j];
            j++;
        }
        k++;
    }

    while (i < arr1.length) {
        arr[k] = arr1[i];
        i++;
        k++;
    }

    while (j < arr2.length) {
        arr[k] = arr2[j];
        j++;
        k++;
    }
}

function printArray(arr, n) {
    for (let i = 0; i < n; i++) {
        console.log(arr[i] + " ");
    }
}

function mergeSort(arr, l, r) {
    if (l >= r) {
        return;
    }
    let m = l + Math.floor((r - l) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
}

let arr = [3, 2, 1, 13, 8, 5, 0, 1];
mergeSort(arr, 0, arr.length - 1);
printArray(arr, arr.length);
