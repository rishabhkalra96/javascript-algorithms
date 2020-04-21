const cs = require('./utils/count_sort');
const ms = require('./utils/merge_sort');
const is = require('./utils/insertion_sort');
const bs = require('./utils/bucket_sort');
const rs = require('./utils/radix_sort');
const qs = require('./utils/quick_sort');
const bubS = require('./utils/bubble_sort');
const ss = require('./utils/selection_sort');

const countSort = (array) => {
    return cs(array);
}

const mergeSort = (array, sIdx, eIdx) => {
    ms(array, sIdx, eIdx);
}

const insertionSort = (array) => {
    return is(array);
}

const bucketSort = (array) => {
    bs(array);
}

const radixSort = (array) => {
    return rs(array);
}

const quickSort = (array) => {
    qs(array);
}

const bubbleSort = (array) => {
    bubS(array);
}

const selectionSort = (array) => {
    return ss(array);
}
module.exports = {
    countSort,
    mergeSort,
    insertionSort,
    bucketSort,
    radixSort,
    quickSort,
    bubbleSort,
    selectionSort,
};