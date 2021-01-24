const {BinaryTree} = require('./library/trees/binary-search-tree');
const {Search} = require('./library/searching/search');
const { LinkedList } = require('./library/linked-list/linked-list');

/* const tree = new BinaryTree();
tree.ArrayToBST([1, 2, 3, 4, 5, 6, 7])
console.log(tree.validateBST());
const data = tree.searchInBST(1);
console.log(data) */

/* const bs = new Search('binary', [10,9,3,4,1,6,11,32,100])

bs.search(9); */

/* const list = new LinkedList();

list.add(10);
list.add(9);
list.add(20);
list.add(5);

list.traverse();
list.getNode(2);
list.update(100, 2);
 */

function findPermutationss(string) {

    if (!string || typeof string !== "string"){
        return "Please enter a string"
      } else if (string.length < 2 ){
        return string
      }
  

    let permutationsArray = [];

    for (let i = 0 ; i < string.length ; i++) {
        let char = string[i];
        if (string.indexOf(char) != i)
            continue
        let remainingChars = string.slice(0,i) + string.slice(i+1, string.length);
        for (let permutation of findPermutationss(remainingChars)) {
            permutationsArray.push(char + permutation)
        }
    }
    return permutationsArray;
}

console.log(findPermutationss('ABCA'))



// how to find intersection
// 1. naive approach would be to compare every node of one list with another -> O(n*m)
// 2. optimised approach would be to first place your pointers in such a way that they both start from equal length, now increment both , 1 by 1
// this way they will eventually meet the intersection point at the same time. If not, intersection does not exist.
