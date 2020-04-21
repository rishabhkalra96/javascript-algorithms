module.exports = (array) => {
    for (let i = 1; i < array.length; i++) {
        const val = array[i];
        let j = i-1;
        while(j >= 0 && array[j] > val) {
            array[j+1] = array[j];
        }
        array[j] = val;
    }
    return array;
}