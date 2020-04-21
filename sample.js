const sorting = require('./library/sorting/sort');

let sample = '432 8 530 90 88 231 11 45 677 199'.split(' ').map(v => parseInt(v));
sample = sorting.selectionSort(sample);
console.log(sample);