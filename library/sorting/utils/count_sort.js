module.exports = (array) => {
    const count = Array(Math.max(...array)+1).fill(0);
    array.forEach(a => count[a] += 1);
    const output = Array(array.length);
    for (let i = 1 ; i < count.length; ++i) {
        count[i] += count[i-1];
    }
    for(let j = array.length-1; j >= 0 ; --j) {
        output[--count[array[j]]] = array[j];
    }
    return output;
};