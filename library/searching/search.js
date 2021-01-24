const {LinearSearch} = require('./utils/linear-search');
const {BinarySearch} = require('./utils/binary-search');
class Search {


    constructor(type, data) {
        this.seachInstance = null;
        switch (type) {
            case 'linear' :
                return new LinearSearch(data);
            case 'binary':
                return new BinarySearch(data);
            default : {
                return new LinearSearch(data);
            }
        }
    }

    search(data) {
        return this.seachInstance.search(data);
    }
}

module.exports = {
    Search,
}