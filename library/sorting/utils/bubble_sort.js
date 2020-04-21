const swap = (array, firstIdx, secondIdx) => {
    let temp = array[firstIdx];
    array[firstIdx] = array[secondIdx];
    array[secondIdx] = temp;
    return array;
}

module.exports = (array) => {
    for (let unsortedLength = 0; unsortedLength < array.length - 1; --unsortedLength) {
        let isSwapped = false;
        for (let iterator = 0 ; iterator < array.length-1 - unsortedLength; iterator++) {
            if (array[iterator] > array[iterator+1]) {
                isSwapped = true;
                array = swap(array, iterator, iterator+1);
            }
        }
        if (!isSwapped) {
            break;
        }
    }
}