// utility function to swap in array
const swap = (array, firstIdx, secondIdx) => {
    let temp = array[firstIdx];
    array[firstIdx] = array[secondIdx];
    array[secondIdx] = temp;
    return array;
}

// partitioner
const partition = (array, lowerB, upperB) => {
    let start = lowerB;
    let end = upperB;
    let pivot = array[lowerB];
    while (start < end) {
        while (array[start] <= pivot) {
            start++;
        }
        while (array[end] > pivot) {
            end--;
        }
        if (start < end) {
            // swap the positions 
            array = swap(array, start, end);
        }
    }
    // swap with pivot element
    array = swap(array, lowerB, end);
    return end;
}

// driver function
function quickSort(array, lb, ub) {
    if (lb < ub) {
        let location = partition(array, lb, ub);
        quickSort(array, lb, location-1);
        quickSort(array, location+1, ub);
    }
}

module.exports = (array) => {
    quickSort(array, 0, array.length-1);
}