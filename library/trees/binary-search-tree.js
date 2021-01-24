const { Node } = require('./utils/node');
const sort = require('./../sorting/sort');

class BinaryTree {
    constructor() {
        this.root = null;
    }

    searchInBST(data) {
        if (!Number.isInteger(data)) throw new Error('data should be integer');
        const recursiveSearchBST = (root, data) => {
            if (root == null) return null;
            if(root.data == data) return root;
            const leftFound = recursiveSearchBST(root.left, data);
            if (leftFound !== null) {
                return leftFound;
            }
            const rightFound = recursiveSearchBST(root.right, data);
            if (rightFound !== null) {
                return rightFound;
            }
            return null;
        }
        return recursiveSearchBST(this.root, data);
    }

    validateBST(root = null) {
        const recursiveValidation = node => {
            if (node == null) return true;
            if (node.left && node.left.data > node.data) return false;
            if (node.right && node.right.data < node.data) return false;
            return recursiveValidation(node.left) && recursiveValidation(node.right);
        }
        if (!root) {
            root = this.root;
        }
        return recursiveValidation(root);
    }

    ArrayToBST(array = []) {

        const recursiveA2BST = (arr, start, end) => {
            if (start > end) {
                return null;
            }
            const mid = Math.floor((start + end) / 2);
            const newNode = new Node(arr[mid]);
            newNode.left = recursiveA2BST(arr, start, mid-1);
            newNode.right = recursiveA2BST(arr, mid+1, end);
            return newNode;
        }
        // first task is to sort the array
        sort.quickSort(array);
        const newRoot = recursiveA2BST(array, 0, array.length-1);
        this.root = newRoot;
    }

    depthOfTree(root = null) {
        const recusriveDepth = node => {
            if (node === null) {
                return -1;
            }
            const left = recusriveDepth(node.left);
            const right = recusriveDepth(node.right);
            return Math.max(left, right) + 1;
        }
        if (root === null) {
            return recusriveDepth(this.root);
        }
        return recusriveDepth(root);
    }

    insert(data = null) {
        const recursiveInsert = (node) => {
            if (node === null) {
                node = new Node(data);
                this.count++;
                return node;
            }
            if (node.data < data) {
                node.right = recursiveInsert(node.right);
            }
            else {
                node.left = recursiveInsert(node.left);
            }
            return node;
        }
        this.root = recursiveInsert(this.root)
    }

    traverse(root, type = 'dfs', traversalOrder = 'in') {
        const BFS = node => {
            const queue = new Array(1).fill(node);
            while(queue.length) {
                const topNode = queue.shift();
                if (topNode.left) {
                    queue.push(topNode.left);
                }
                if (topNode.right) {
                    queue.push(topNode.right);
                }
                console.log(topNode.data)
            }
        }

        const SPIRAL = node => {
            const s1 = [node];
            const s2 = [];
            let result = [];
            while (s1.length || s2.length) {
                while(s1.length) {
                    const topNode = s1.pop();
                    if (topNode.left) {
                        s2.push(topNode.left);
                    }
                    if (topNode.right) {
                        s2.push(topNode.right);
                    }
                    result.push(topNode.data);
                }
                while(s2.length) {
                    const topNode = s2.pop();
                    if (topNode.right) {
                        s1.push(topNode.right);
                    }
                    if (topNode.left) {
                        s1.push(topNode.left);
                    }
                    result.push(topNode.data);
                }
            }
            console.log(result.join(','));
        }

        if (type === 'dfs') {
            if (traversalOrder === 'in') {
                const inOrderTraversal = node => {
                    if (node === null) {
                        return;
                    }
                    inOrderTraversal(node.left);
                    console.log(node.data)
                    inOrderTraversal(node.right);
                }
                inOrderTraversal(root || this.root)
            }
            else if (traversalOrder === 'pre') {
                const preOrderTraversal = node => {
                    if (node === null) {
                        return;
                    }
                    console.log(node.data);
                    preOrderTraversal(node.left);
                    preOrderTraversal(node.right);
                }
                preOrderTraversal(root || this.root);
            }
            else if (traversalOrder === 'post') {
                const postOrderTraversal = node => {
                    if (node === null) {
                        return;
                    }
                    postOrderTraversal(node.left);
                    postOrderTraversal(node.right);
                    console.log(node.data);
                }
                postOrderTraversal(root || this.root);
            }
            else {
                cosole.log('invalid traversal')
            }
        } else if (type === 'bfs'){
            BFS(root || this.root);
        } else if (type === 'spiral') {
            SPIRAL(root || this.root);
        }
    }
}

module.exports = {
    BinaryTree
}