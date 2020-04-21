module.exports = (array,sIdx, eIdx) => {
    function merge(sample, starting, middle, ending) {
        // console.log('called merge with ', sample);
        // console.log('starting inside merge is ', starting);
        // console.log('middle inside merge is ', middle);
        // console.log('emding inside merge is ', ending);
        const n1 = middle - starting + 1;
        const n2 = ending - middle;
        // console.log(`value of n1 and n2 is ${n1} and ${n2}`);
        // copy elements
        const LeftArray = Array(n1);
        const RightArray = Array(n2);
    
        for (let i = 0 ; i < n1; ++i) {
            LeftArray[i] = sample[starting+i];
        }
        for (let j = 0 ; j < n2; ++j) {
            RightArray[j] = sample[middle+1+j];
        }
        // console.log('after copying the left and right array looks like');
        // console.log(LeftArray);
        // console.log(RightArray);
        let i = 0 ;
        let j = 0;
        let k = starting;
    
        while (i < n1 && j < n2) {
            if (LeftArray[i] <= RightArray[j]) {
                sample[k] = LeftArray[i];
                ++i;
            } else {
                sample[k] = RightArray[j];
                ++j;
            }
            ++k;
        }
        // copy the remaining elements
        while (i < n1) {
            sample[k] = LeftArray[i];
            ++i;
            ++k;
        }
        while (j < n2) {
            sample[k] = RightArray[j];
            ++j;
            ++k;
        }
    }
    
    function merge_sort(array, start, end) {
        // console.log('called merge sort on ', array);
        // console.log('starting index is ', start);
        // console.log('ending index is ', end);
        if(start < end) {
            // console.log('end is > start');
            const mid = Math.floor(start+ (end - start)/2);
            // console.log('middle is ', mid);
            merge_sort(array, start, mid);
            merge_sort(array, mid+1, end);
            merge(array, start, mid, end);
        }
    }
    merge_sort(array,sIdx, eIdx);
}