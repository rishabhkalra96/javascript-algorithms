module.exports = (array) => {
    // to find the median of given array values,
    if (array.length % 2 == 0) {
        const s1 = array[(array.length/2)];
        const s2 = array[(array.length/2)-1];
        return (s1+s2)/2;
    }
     else {
         return parseInt(array[Math.floor(array.length/2)]);
     }
}