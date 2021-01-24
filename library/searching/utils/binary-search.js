const qs = require('./../../sorting/sort').quickSort
class BinarySearch {
    constructor(array) {
        const copiedArray = [...array];
        console.log('auto sorting the list')
        qs(copiedArray);
        this.array = copiedArray;
        this.arrayLength = array.length
    }

    get length() {
        return this.array ? this.array.length : new Error('array not initialised');
    }

    search(data) {
        let start = 0;
        let end = this.array.length-1;
        while (start < end) {
            const mid = Math.floor((start + end)/2);
            if (this.array[mid] === data) {
                console.log('found at index ', mid);
            }
            if (this.array[mid] < data) {
                start = mid+1;
            } else {
                end = mid-1;
            }
        }
    }
}

module.exports = {
    BinarySearch
}