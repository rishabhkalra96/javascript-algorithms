module.exports = (array) => {
    function merge(left, right) {
        while (left.length && right.length) {
            result.push( left[0] <= right[0] ? left.shift() : right.shift());
        }
        return [...result, ...left, ...right];
    }
    
    function merge_sort(array) {
        if (array.length) return array[0] <= array[1] ? [array[0], array[1]] : [array[1], array[0]]
        const mid = Math.floor(array.length / 2);
        const left = array.splice(0,mid);
        const right = array;
        return merge(merge_sort(left), merge_sort(right));
    }
    return merge_sort(array);
}