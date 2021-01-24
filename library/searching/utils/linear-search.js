class LinearSearch {
    constructor(array) {
        this.array = array;
        this.arrayLength = array.length;
    }

    search(data) {
        const index = this.array.findIndex((val) => val === data);
        console.log('element found at position ', index);
    }
}

module.exports = {
    LinearSearch
}