const is = require('./insertion_sort');

module.exports = (array) => {
    // create n buckets
    const buckets = Array(array.length).fill([]);
    // assign values to buckets
    array.forEach((e,i) => {
        const bucketIdx = parseInt(array.length/e);
        buckets[bucketIdx].push(e);
    });
    // sort individual buckets
    buckets.forEach((bucket, bucketIdx) => {
        buckets[bucketIdx] = [...is(bucket)];
    });
    // compile all the buckets
    const sortedArray = [];
    buckets.forEach(bucket => {
        sortedArray.push(...bucket);
    });
    return sortedArray;
}