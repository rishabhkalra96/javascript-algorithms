const modifiedCountSort = (sourceArray, bitPos) => {
    // the default range for k will be 0-9 because digits are always from 0-9
    let countArray = Array(10).fill(0);
    // fill the frequency of countArray
    sourceArray.forEach(sourceEl => {
        const num = parseInt((sourceEl/bitPos))%10;
        countArray[num] += 1;
    });
    // adjust the index
    for (let i = 1 ; i < countArray.length; i++) {
        countArray[i] += countArray[i-1];
    }
    // prepare the output array
    let output = Array(sourceArray.length);
    for (let sourceIdx = sourceArray.length-1; sourceIdx >= 0; --sourceIdx) {
        const bitPlaceIdx = parseInt((sourceArray[sourceIdx]/bitPos))%10;
        output[--countArray[bitPlaceIdx]] = sourceArray[sourceIdx];
    }
    // copy the output array to the source array
    return [...output];
};

module.exports = (array) => {
    // get the ma number from the array
    const maxNum = Math.max(...array);
    // loop will run proportional to the number of bits in maximum number
    for (let pos = 1; parseInt(maxNum/pos) > 0; pos *= 10) {
        array = modifiedCountSort(array, pos);
    }
    return array;
}