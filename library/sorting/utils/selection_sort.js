const swap = (array, firstIdx, secondIdx) => {
    let temp = array[firstIdx];
    array[firstIdx] = array[secondIdx];
    array[secondIdx] = temp;
    return array;
}

module.exports = (array) => {
    for (let i = 0 ; i < array.length-1; i++) {
        let minIdx = parseInt(i);
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[minIdx]) {
                minIdx = j;
            }
        }
        if (i !== minIdx) {
            array = swap(array, i, minIdx);
        }
    }
    return array;
};